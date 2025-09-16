"use client"

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import TAGS from "../tags";
import TechTag from "../ui/TechTag";
import { TagConfig } from "../../types/TagConfig";

type TimelineItem = {
    year: string;
    title: string;
    company?: string;
    institution?: string;
    description: string;
    technologies?: (string | TagConfig)[];
    type: 'work' | 'education';
    certificateUrl?: string;
    projectUrl?: string;
    actionLabel?: string;
};

function Trajectory() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const timelineItems: TimelineItem[] = [
        {
            year: "2022 - Presente",
            title: "Licenciatura en Sistemas de la Información",
            company: "Universidad Nacional del Nordeste",
            description: "Carrera de grado en sistemas de información",
            type: 'education',
        },
        {
            year: "2023-2024",
            title: "Full Stack Developer",
            institution: "Talentos Digitales",
            description: "Programa de formación para Full Stack developers, con especialización en PHP (Laravel), MySQL y Vue.JS",
            technologies: [TAGS.PHP, TAGS.LARAVEL, TAGS.CODEIGNITER, TAGS.BOOTSTRAP, TAGS.MYSQL, TAGS.VUE, TAGS.NODEJS, TAGS.JAVASCRIPT],
            type: 'education',
            certificateUrl: "/certification/CertificadoTalentosDigitales.png",
            actionLabel: "Ver Certificado"
        },
        {
            year: "2024-2025",
            title: "Full Stack Developer",
            institution: "Bootcamp 3.0 By Devlights",
            description: "Programa de formación para Full Stack developers, con especialización .NET (C#), SQL Server y Angular",
            technologies: [TAGS.DOTNET, TAGS.CSHARP, TAGS.SQLSERVER, TAGS.ANGULAR],
            type: 'education',
            certificateUrl: "/certification/CertificadoDevlights.jpg",
            actionLabel: "Ver Certificado"
        },
        {
            year: "2025 - Presente",
            title: "Inglés Británico",
            institution: "Universidad Nacional del Nordeste",
            description: "Curso de inglés británico desde A1 hasta B2",
            type: 'education',
        },
        {
            year: "2025 - Presente",
            title: "Web developer",
            company: "Skin",
            description: "Desarrollo de sitio web de manera freelance para Skin, e-commerce de accersorios para dispositivos móviles.",
            technologies: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.SUPABASE],
            type: 'work',
            projectUrl: "https://skincts.vercel.app/",
            actionLabel: "Ver sitio web"
        },
        {
            year: "2025 - Presente",
            title: "Frontend Developer",
            company: "Inside Dark Studio",
            description: "Pasante como desarrollador frontend, colaborando en proyectos de desarrollo web y aplicaciones utilizando tecnologías modernas.",
            technologies: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
            type: 'work',
            projectUrl: "https://insidedarkstudio.com",
            actionLabel: "Ver Empresa"
        }
    ]

    const handleAction = (item: TimelineItem) => {
        if (item.projectUrl) {
            window.open(item.projectUrl, '_blank')
        }
    }

    return (
        <section id="experience"  className="py-20 bg-black dark:bg-white text-white dark:text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-20">
                    <motion.h2
                        className="text-5xl md:text-6xl font-light"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Mi Trayectoria
                    </motion.h2>
                    <motion.span
                        className="text-lg text-zinc-400 dark:text-zinc-600 hidden md:block"
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
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start border-b border-gray-400 dark:border-gray-600 pb-3"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Year - Left column on desktop, top on mobile */}
                            <div className="md:col-span-2">
                                <span className="text-3xl md:text-4xl font-light text-zinc-400 dark:text-zinc-600">
                                    {item.year}
                                </span>
                            </div>

                            {/* Content - Right column on desktop, bottom on mobile */}
                            <div className="md:col-span-10 space-y-4">
                                <div className="lg:flex lg:items-start lg:justify-between">
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
                                        <p className="text-lg text-zinc-400 dark:text-zinc-600 mb-4">
                                            {item.company || item.institution}
                                        </p>
                                    </div>
                                    
                                    {/* Botón de acción */}
                                    {(item.certificateUrl || item.projectUrl) && (
                                        <>
                                            {item.certificateUrl ? (
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <button className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 dark:bg-zinc-200/50 dark:hover:bg-zinc-300/50 border border-zinc-700 hover:border-zinc-600 dark:border-zinc-300 dark:hover:border-zinc-400 text-zinc-300 hover:text-white dark:text-zinc-700 dark:hover:text-black px-4 py-2 rounded-lg transition-all duration-200 text-sm">
                                                            <Award size={16} />
                                                            <span>{item.actionLabel}</span>
                                                        </button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-4xl w-full lg:w-auto bg-zinc-900 dark:bg-zinc-100 border-zinc-700 dark:border-zinc-300">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-white dark:text-black">Certificado</DialogTitle>
                                                        </DialogHeader>
                                                        <div className="flex justify-center">
                                                            <Image
                                                                src={item.certificateUrl}
                                                                alt="Certificado"
                                                                width={800}
                                                                height={600}
                                                                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                                                                priority
                                                            />
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            ) : (
                                                <button
                                                    onClick={() => handleAction(item)}
                                                    className="flex items-center gap-2 bg-zinc-800/50 hover:bg-zinc-700/50 dark:bg-zinc-200/50 dark:hover:bg-zinc-300/50 border border-zinc-700 hover:border-zinc-600 dark:border-zinc-300 dark:hover:border-zinc-400 text-zinc-300 hover:text-white dark:text-zinc-700 dark:hover:text-black px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                                                >
                                                    <ExternalLink size={16} />
                                                    <span>{item.actionLabel}</span>
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>

                                <p className="text-lg text-zinc-300 dark:text-zinc-700 leading-relaxed max-w-2xl">
                                    {item.description}
                                </p>

                                {/* Technologies - Right aligned on desktop */}
                                <div className="flex flex-wrap gap-3 justify-start md:justify-end mt-6">
                                    {item.technologies?.map((tech, techIndex) => (
                                        <TechTag
                                            key={techIndex}
                                            tag={tech}
                                            size="sm"
                                            variant="default"
                                        />
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

export default Trajectory;