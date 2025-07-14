'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CardHeader, CardBody, CardFooter, Button } from '@heroui/react'
import NeoCard from '@/components/NeoCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white py-16 px-4 flex flex-col items-center">

      {/* Section Hero */}
      <section className="text-center space-y-6">
        <Image
          src="/photo.png"
          alt="Photo de Loocist23"
          width={120}
          height={120}
          className="rounded-full mx-auto border-2 border-white"
        />
        <h1 className="text-4xl font-bold">Anthony – Loocist23</h1>
        <p className="text-zinc-400 text-lg">
          Développeur freelance passionné — j’aide à créer des projets solides, fonctionnels et stylés.
        </p>
      </section>

      {/* Cards d’infos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-6xl">
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
            Disponible pour missions freelance, projets web, mobile, ou logiciels métier.
          </CardBody>
        </NeoCard>

        <Link href="/contact" className="block">
          <NeoCard delay={0.3} className="cursor-pointer hover:ring-2 hover:ring-primary transition">
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
      <section className="mt-20 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Dernier projet</h2>
        <NeoCard className="w-full" delay={0.4}>
          <CardHeader>
            <h3 className="text-xl font-semibold">Miam n&apos;Good — App de gestion de repas</h3>
          </CardHeader>
          <CardBody className="text-zinc-400 space-y-2">
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
        <h2 className="text-xl font-semibold mb-4">Besoin d’un développeur motivé ?</h2>
        <NeoCard className="inline-block">
                  <p className="text-zinc-400 mb-6">
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
