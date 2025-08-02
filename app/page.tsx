'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CardHeader, CardBody, CardFooter, Button } from '@heroui/react'
import NeoCard from '@/components/NeoCard'

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-16 text-white bg-zinc-950">

      {/* Section Hero */}
      <section className="space-y-6 text-center">
        <Image
          src="/photo.png"
          alt="Photo de Loocist23"
          width={120}
          height={120}
          className="mx-auto border-2 border-white rounded-full"
        />
        <h1 className="text-4xl font-bold">Anthony – Loocist23</h1>
        <p className="text-lg text-zinc-400">
          Développeur freelance passionné — j’aide à créer des projets solides, fonctionnels et stylés.
        </p>
      </section>

      {/* Cards d’infos */}
      <section className="grid w-full max-w-6xl grid-cols-1 gap-6 mt-16 md:grid-cols-3">
        <NeoCard delay={0.1}>
          <CardHeader>
            <h3 className="text-xl font-semibold">Localisation</h3>
          </CardHeader>
          <CardBody className="text-zinc-400">
            Je travaille depuis le Gard (30), mais je collabore à distance avec tout le monde.
          </CardBody>
        </NeoCard>

        <NeoCard delay={0.2}>
          <CardHeader>
            <h3 className="text-xl font-semibold">Statut</h3>
          </CardHeader>
          <CardBody className="text-zinc-400">
            Fondateur de Dev&apos;AZ depuis le 15 juillet 2025, disponible pour missions freelance,
            projets web, mobile, ou logiciels métier.
          </CardBody>
        </NeoCard>

        <Link href="/contact" className="block">
          <NeoCard delay={0.3} className="transition cursor-pointer hover:ring-2 hover:ring-primary">
            <CardHeader>
              <h3 className="text-xl font-semibold">Contact</h3>
            </CardHeader>
            <CardBody className="text-zinc-400">
              Tu as une idée ou besoin d’un dev ? Parlons-en !
            </CardBody>
          </NeoCard>
        </Link>

      </section>

      {/* Dernier projet */}
      <section className="w-full max-w-4xl mt-20">
        <h2 className="mb-4 text-2xl font-bold text-center">Dernier projet</h2>
        <NeoCard className="w-full" delay={0.4}>
          <CardHeader>
            <h3 className="text-xl font-semibold">Miam n&apos;Good — App de gestion de repas</h3>
          </CardHeader>
          <CardBody className="space-y-2 text-zinc-400">
            <p>Une app moderne pour t’aider à planifier tes repas, faire tes courses et gagner du temps.</p>
            <p className="text-sm">
              <strong>Stack :</strong> Flutter • Pocketbase • API custom • Authentification • UI/UX
            </p>
          </CardBody>
          <CardFooter className="flex gap-4">
            <Button as={Link} href="/projects" variant="flat" color="primary">Voir plus</Button>
            <Button as={Link} href="https://github.com/Loocist23" target="_blank" variant="bordered">
              GitHub
            </Button>
          </CardFooter>
        </NeoCard>
      </section>

      {/* Call to action */}
      <section className="mt-16 text-center">
        <h2 className="mb-4 text-xl font-semibold">Besoin d’un développeur motivé ?</h2>
        <NeoCard className="inline-block">
                  <p className="mb-6 text-zinc-400">
          Je suis prêt à relever de nouveaux défis et à t’aider à concrétiser tes idées.
        </p>
          <Button as={Link} href="/contact" color="primary" variant="solid" className="w-full rounded-xl">
            Me contacter
          </Button>
        </NeoCard>
      </section>
    </main>
  )
}
