import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, email, message } = body;

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Portfolio Loocist', email: 'anthonyzegnal05@gmail.com' },
        to: [{ email: 'loocist@proton.me', name: 'Anthony' }],
        replyTo: { email },
        templateId: 2, // Remplace si besoin
        params: { nom, email, message },
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      // Essayons de lire d'abord le JSON, sinon fallback texte brut
      let errorDetails = 'Erreur inconnue';
      try {
        const text = await response.text();
        errorDetails = text;
      } catch (e) {
        errorDetails = 'Impossible de lire la réponse Brevo.';
      }

      console.error("[Brevo ERROR]", {
        status: response.status,
        headers: [...response.headers.entries()],
        body: errorDetails
      });

      return NextResponse.json({ success: false, error: errorDetails }, { status: 500 });
    }
  } catch (e) {
    console.error("Erreur interne :", e);
    return NextResponse.json({ success: false, error: 'Erreur serveur.' }, { status: 500 });
  }
}
