"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

type TimelineItem = {
    year: string
    title: string
    company?: string
    institution?: string
    description: string
    technologies?: string[]
    type: 'work' | 'education'
}

export default function ExperienceAndEducation() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    const timelineItems: TimelineItem[] = [
        {
            year: "2024",
            title: "Frontend Developer",
            company: "Freelance",
            description: "Desarrollo de aplicaciones web modernas con React, Next.js y TypeScript.",
            technologies: ["React", "Next.js", "TypeScript"],
            type: 'work'
        },
        {
            year: "2024-2025",
            title: "Full Stack Developer Bootcamp",
            institution: "Bootcamp 3.0 By Devlights",
            description: "Bootcamp de formación para Full Stack developers, con especialización en .Net, MS SQL Server, MongoDB y Angular",
            technologies: [".NET", "SQL Server", "MongoDB"],
            type: 'education'
        },
        {
            year: "2023-2024",
            title: "Full Stack Developer Program",
            institution: "Talentos Digitales",
            description: "Programa de formación para Full Stack developers, con especialización en PHP (Laravel), MySQL y Vue.JS",
            technologies: ["PHP", "Laravel", "Vue.js"],
            type: 'education'
        },
        {
            year: "2022",
            title: "Licenciatura en Sistemas de la Información",
            institution: "Universidad Nacional del Nordeste",
            description: "Carrera de grado en sistemas de información",
            technologies: ["Programming", "Database", "Systems"],
            type: 'education'
        },
    ]

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-20">
                    <motion.h2
                        className="text-5xl md:text-6xl font-light"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Selected Work
                    </motion.h2>
                    <motion.span
                        className="text-lg text-zinc-400 hidden md:block"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        2022 — 2025
                    </motion.span>
                </div>

                {/* Timeline Items */}
                <div ref={sectionRef} className="space-y-20 md:space-y-32">
                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start border-b border-gray-400 pb-3"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Year - Left column on desktop, top on mobile */}
                            <div className="md:col-span-2">
                                <span className="text-3xl md:text-4xl font-light text-zinc-400">
                                    {item.year}
                                </span>
                            </div>

                            {/* Content - Right column on desktop, bottom on mobile */}
                            <div className="md:col-span-10 space-y-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-light mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-zinc-400 mb-4">
                                        {item.company || item.institution}
                                    </p>
                                </div>

                                <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>

                                {/* Technologies - Right aligned on desktop */}
                                <div className="flex flex-wrap gap-3 justify-start md:justify-end mt-6">
                                    {item.technologies?.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-sm text-zinc-400 bg-zinc-800/30 px-4 py-2 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}