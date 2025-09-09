"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { ExternalLink, Award, X, GraduationCap, Briefcase } from "lucide-react"

type TimelineItem = {
    year: string
    title: string
    company?: string
    institution?: string
    description: string
    technologies?: string[]
    type: 'work' | 'education'
    certificateUrl?: string
    projectUrl?: string
    actionLabel?: string
}

function Trajectory() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

    const timelineItems: TimelineItem[] = [
        {
            year: "2022 - actualidad",
            title: "Licenciatura en Sistemas de la Información",
            company: "Universidad Nacional del Nordeste",
            description: "Carrera de grado en sistemas de información",
            type: 'education',
            certificateUrl: "/certificates/licenciatura-sistemas.pdf",
            actionLabel: "Ver Certificado"
        },
        {
            year: "2023-2024",
            title: "Full Stack Developer",
            institution: "Talentos Digitales",
            description: "Programa de formación para Full Stack developers, con especialización en PHP (Laravel), MySQL y Vue.JS",
            technologies: ["PHP", "Laravel", "CodeIgniter", "Bootstrap", "MySQL", "Vue.js", "Node.js", "JavaScript", "HTML", "CSS"],
            type: 'education',
            certificateUrl: "/certificates/talentos-digitales.pdf",
            actionLabel: "Ver Certificado"
        },
        {
            year: "2024-2025",
            title: "Full Stack Developer",
            institution: "Bootcamp 3.0 By Devlights",
            description: "Programa de formación para Full Stack developers, con especialización .NET (C#), SQL Server y Angular",
            technologies: [".NET", "SQL Server", "Angular"],
            type: 'education',
            certificateUrl: "/certificates/devlights-bootcamp.pdf",
            actionLabel: "Ver Certificado"
        },
        {
            year: "2025",
            title: "Inglés Británico",
            institution: "Universidad Nacional del Nordeste",
            description: "Curso de inglés británico desde A1 hasta B2",
            type: 'education',
            certificateUrl: "/certificates/ingles-britanico.pdf",
            actionLabel: "Ver Certificado"
        },
        {
            year: "2025",
            title: "Web developer",
            company: "Freelance",
            description: "Desarrollo de sitios web y aplicaciones web para clientes diversos, utilizando tecnologías modernas y mejores prácticas de la industria.",
            technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Tailwind CSS"],
            type: 'work',
            projectUrl: "https://tu-portfolio.com",
            actionLabel: "Ver Proyectos"
        },
        {
            year: "2025",
            title: "Frontend Developer",
            company: "Inside Dark Studio",
            description: "Pasante como desarrollador frontend, colaborando en proyectos de desarrollo web y aplicaciones utilizando tecnologías modernas.",
            technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Tailwind CSS"],
            type: 'work',
            projectUrl: "https://insidedarkstudio.com",
            actionLabel: "Ver Empresa"
        }
    ]

    const handleAction = (item: TimelineItem) => {
        if (item.certificateUrl) {
            setSelectedCertificate(item.certificateUrl)
        } else if (item.projectUrl) {
            window.open(item.projectUrl, '_blank')
        }
    }

    const closeCertificateModal = () => {
        setSelectedCertificate(null)
    }

    return (
        <section id="experience"  className="py-20 bg-black text-white">
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
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl md:text-3xl font-light">
                                                {item.title}
                                            </h3>
                                            {/* Identificador visual del tipo */}
                                            <div className="flex items-center gap-1">
                                                {item.type === 'education' ? (
                                                    <div className="flex items-center gap-1 bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                                                        <GraduationCap size={12} />
                                                        <span>Educación</span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                                                        <Briefcase size={12} />
                                                        <span>Trabajo</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-lg text-zinc-400 mb-4">
                                            {item.company || item.institution}
                                        </p>
                                    </div>
                                    
                                    {/* Botón de acción */}
                                    {(item.certificateUrl || item.projectUrl) && (
                                        <button
                                            onClick={() => handleAction(item)}
                                            className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                                        >
                                            {item.certificateUrl ? (
                                                <>
                                                    <Award size={16} />
                                                    <span>{item.actionLabel}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <ExternalLink size={16} />
                                                    <span>{item.actionLabel}</span>
                                                </>
                                            )}
                                        </button>
                                    )}
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

            {/* Modal para certificados */}
            {selectedCertificate && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-zinc-700">
                            <h3 className="text-xl font-semibold text-white">Certificado</h3>
                            <button
                                onClick={closeCertificateModal}
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-4">
                            <iframe
                                src={selectedCertificate}
                                className="w-full h-[70vh] border-0"
                                title="Certificado"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Trajectory;