'use client'

import NeoCard from '@/components/NeoCard'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-4 bg-zinc-950 text-white flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Je suis Anthony, développeur freelance sous le pseudo <strong>Loocist23</strong>. Je suis basé dans le Gard (30),
            mais je travaille avec des clients partout en France et à l&apos;international.
          </p>
        </div>

        <NeoCard className="flex flex-col md:flex-row items-center gap-8 p-8">
          <Image
            src="/photo.png"
            alt="Photo de profil"
            width={120}
            height={120}
            className="rounded-full border border-white"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Qui suis-je ?</h2>
            <p className="text-zinc-400 leading-relaxed">
              Passionné de développement depuis plusieurs années, j’ai appris à créer des applications robustes et
              modernes en utilisant des technologies comme React, Next.js, Flutter, Node.js, C# ou encore Python.
              Mon objectif : livrer des solutions utiles, propres, et bien pensées.
            </p>
          </div>
        </NeoCard>

        <NeoCard className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Ce que je propose</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>Sites vitrines et portfolios modernes</li>
            <li>Applications web ou mobile sur mesure</li>
            <li>Outils internes pour entreprises (dashboard, connecteurs, etc.)</li>
            <li>Automatisation, scraping, IA, assistants vocaux</li>
            <li>Suivi technique, conseils et accompagnement</li>
          </ul>
        </NeoCard>

        <NeoCard className="p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Travaillons ensemble !</h2>
          <p className="text-zinc-400 mb-4">
            Si tu as une idée, un besoin ou juste envie de discuter technique, n&apos;hésite pas à me contacter.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/80 transition"
          >
            Me contacter
          </a>
        </NeoCard>
      </div>
    </section>
  )
}
