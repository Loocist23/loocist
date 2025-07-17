'use client'

import NeoCard from "@/components/NeoCard"

export default function MentionsPage() {
  return (
    <section className="flex flex-col items-center min-h-screen px-4 py-20 text-white bg-zinc-950">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-center">Mentions légales</h1>

        <NeoCard className="p-8 space-y-6">
          <div>
            <h2 className="mb-2 text-xl font-semibold">Éditeur du site</h2>
            <p className="text-zinc-400">
              Ce site est édité par Anthony Zegnal (alias Loocist23), développeur freelance.
              <br />
              Adresse e-mail : <a href="mailto:loocist@proton.me" className="underline hover:text-white">loocist@proton.me</a>
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Hébergement</h2>
            <p className="text-zinc-400">
              Le site est hébergé par :
              <br />
              <strong>OVH</strong>
              <br />
              Adresse : 2 rue Kellermann, 59100 Roubaix, France
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Propriété intellectuelle</h2>
            <p className="text-zinc-400">
              Tous les contenus présents sur ce site (textes, images, code) sont la propriété exclusive de Loocist23,
              sauf mention contraire. Toute reproduction totale ou partielle est interdite sans autorisation.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Responsabilité</h2>
            <p className="text-zinc-400">
              L’éditeur ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l’utilisateur
              lors de l’accès au site.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold">Données personnelles</h2>
            <p className="text-zinc-400">
              Aucune donnée personnelle n’est collectée sans le consentement de l’utilisateur. Les données envoyées via le formulaire
              de contact ne sont utilisées que pour traiter les demandes.
            </p>
          </div>
        </NeoCard>
      </div>
    </section>
  )
}
