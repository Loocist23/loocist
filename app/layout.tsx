import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dev\'AZ OS | Loocist23 Terminal Portfolio',
  description: 'Terminal portfolio of Anthony (Loocist23) - Full-Stack Developer with 49 GitHub repositories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
