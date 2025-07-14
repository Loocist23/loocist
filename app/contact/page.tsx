'use client'

import { Form, Input, Textarea, Button } from "@heroui/react"
import { Mail, Linkedin, Github } from "lucide-react"
import NeoCard from "@/components/NeoCard"
import React from "react"

export default function ContactPage() {
    const [submitted, setSubmitted] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        const data = Object.fromEntries(new FormData(e.currentTarget))

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })

        if (res.ok) {
            setSubmitted(true)
        } else {
            const err = await res.json()
            setError(err?.error || "Une erreur est survenue.")
        }

        setLoading(false)
    }

    return (
        <section className="min-h-screen py-20 px-4 bg-zinc-950 text-white flex flex-col items-center">
            <div className="max-w-2xl w-full text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Me contacter</h1>
                <p className="text-zinc-400">
                    Tu as un projet en tête ? Une question ? Une idée de collaboration ? Remplis le formulaire ci-dessous,
                    et je te répondrai rapidement !
                </p>
            </div>

            <NeoCard className="w-full max-w-xl lg:min-w-[600px]">
                {submitted ? (
                    <div className="text-center py-10 text-green-400 font-semibold">
                        ✅ Merci pour ton message, je te recontacte rapidement !
                    </div>
                ) : (
                    <Form className="space-y-6" onSubmit={onSubmit}>
                        <Input
                            isRequired
                            label="Nom"
                            name="nom"
                            placeholder="Ton nom complet"
                            labelPlacement="outside"
                            classNames={{
                                inputWrapper: "bg-zinc-800 rounded-xl w-full px-4 py-2",
                                input: "text-white placeholder-zinc-400",
                                label: "text-white",
                            }}
                        />
                        <Input
                            isRequired
                            type="email"
                            name="email"
                            placeholder="ton@email.com"
                            label="Adresse email"
                            labelPlacement="outside"
                            errorMessage="Adresse invalide"
                            classNames={{
                                inputWrapper: "bg-zinc-800 rounded-xl w-full px-4 py-2",
                                input: "text-white placeholder-zinc-400",
                                label: "text-white",
                            }}
                        />
                        <Textarea
                            isRequired
                            name="message"
                            label="Message"
                            placeholder="Explique ton besoin, ton idée ou ton projet ici..."
                            labelPlacement="outside"
                            classNames={{
                                base: "bg-zinc-800 rounded-xl w-full px-4 py-2",
                                input: "text-white placeholder-zinc-400 min-h-[150px] resize-y",
                                label: "text-white",
                            }}
                        />

                        <Button type="submit" color="primary" className="w-full rounded-xl" isLoading={loading}>
                            Envoyer
                        </Button>

                        {error && <div className="text-red-500 text-sm">{error}</div>}
                    </Form>
                )}
            </NeoCard>

            <NeoCard className="mt-10 text-center w-full max-w-md lg:min-w-[400px] px-10 py-6">
                <p className="text-zinc-400 mb-4 text-sm">Tu peux aussi me contacter via :</p>
                <div className="flex justify-center gap-6">
                    <a href="mailto:loocist@proton.me" className="hover:text-white transition-colors" aria-label="Email">
                        <Mail size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/anthony-zegnal" target="_blank" className="hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/Loocist23" target="_blank" className="hover:text-white transition-colors" aria-label="GitHub">
                        <Github size={24} />
                    </a>
                </div>
            </NeoCard>
        </section>
    )
}
