'use client'

import NeoCard from "@/components/NeoCard"
import React from "react"

const projects = [
    {
        emoji: "🎞️",
        name: "onebyone – Extracteur de Frames Vidéo",
        description:
            "Application graphique en Python avec Tkinter et OpenCV pour extraire toutes les frames d’une vidéo, les renommer et afficher des statistiques.",
        stack: "Python • OpenCV • Tkinter",
        link: "https://github.com/Loocist23/onebyone",
        delay: 0.1,
    },
    {
        emoji: "🖼️",
        name: "takeitout – Visualiseur avec suppression de métadonnées",
        description:
            "Application pour visualiser des images, inspecter et supprimer leurs métadonnées avant sauvegarde en lot avec renommage.",
        stack: "Python • Tkinter • Pillow (PIL)",
        link: "https://github.com/Loocist23/takeitout",
        delay: 0.2,
    },
    {
        emoji: "🧩",
        name: "FakeInfo-Filler – Extension de remplissage de formulaires",
        description:
            "Extension Chrome/Firefox qui permet de générer et remplir intelligemment des champs de formulaires avec de fausses données réalistes. Idéal pour le test, le debug ou les démonstrations.",
        stack: "JavaScript • WebExtension API • HTML/CSS",
        link: "https://github.com/Loocist23/FakeInfo-Filler",
        delay: 0.3,
    },
    {
        emoji: "🍉",
        name: "Fruit Slash Saga Beater – Détection d’objets avec YOLOv5",
        description:
            "Projet complet pour capturer, annoter, convertir et entraîner un modèle YOLOv5 à détecter des fruits et bombes dans le jeu Fruit Slash Saga. Inclut scripts de traitement et de test en direct.",
        stack: "Python • YOLOv5 • LabelImg • Dataset Augmentation",
        link: "https://github.com/Loocist23/fruit-slash-saga-beater",
        delay: 0.4,
    },
    {
        emoji: "🖥️",
        name: "PowerAudit (Shell Edition) – Audit matériel Linux en Bash",
        description:
            "Script Bash ultra-léger et rapide permettant d’auditer une machine Linux (hardware, OS, sécurité, apps) et de générer des rapports CSV/JSON. Aucune dépendance, compatible multi-distributions.",
        stack: "Bash • Shell • Linux CLI",
        link: "https://github.com/Loocist23/PowerAudit-Shell-Edition",
        delay: 0.5,
    },
    {
        emoji: "🎤",
        name: "Echo – Assistant vocal intelligent avec interface graphique",
        description:
            "Assistant vocal en Python avec interface PyQt5 permettant d’effectuer des recherches, lire de la musique, gérer des tâches ou consulter la météo à la voix. Contrôle vocal, reconnaissance, synthèse et plus.",
        stack: "Python • PyQt5 • SpeechRecognition • yt-dlp • Pytube",
        link: "https://github.com/Loocist23/echo-assistant",
        delay: 0.6,
    },
    {
        emoji: "🍽️",
        name: "MealMaster – Planification de repas & gestion intelligente des courses",
        description:
            "App mobile Flutter permettant de planifier ses repas, générer automatiquement des listes de courses, suivre son garde-manger et comparer les prix des aliments. Connectée à PocketBase pour la gestion des données.",
        stack: "Flutter • PocketBase • Mobile",
        link: "https://github.com/Loocist23/MealMaster",
        delay: 0.7,
    },
    // 🔜 Tu pourras continuer ici avec les autres projets
]

export default function ProjectsPage() {
    return (
        <section className="min-h-screen py-20 px-4 bg-zinc-950 text-white flex flex-col items-center">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <NeoCard key={project.name} delay={project.delay} className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            {project.emoji} {project.name}
                        </h3>
                        <p className="text-zinc-400 mb-4">{project.description}</p>
                        <p className="text-sm text-zinc-500 mb-4">
                            <strong>Stack :</strong> {project.stack}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={project.link}
                                target="_blank"
                                className="text-primary underline hover:text-white"
                            >
                                Voir sur GitHub
                            </a>
                        </div>
                    </NeoCard>
                ))}
            </div>
        </section>
    )
}
