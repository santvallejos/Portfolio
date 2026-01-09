"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Award, GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import TAGS from "../tags";
import TechTag from "../ui/TechTag";
import { TimelineItem, Certificate } from "../../types/Trajectory";
import { CertificateGallery } from "./CertificateGallery";


// Componente para manejar el estado de carga de imágenes de certificados
function CertificateImageWithLoading({ 
    src, 
    alt, 
    className 
}: { 
    src: string; 
    alt: string; 
    className?: string; 
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className="relative">
            {/* Skeleton loader */}
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 dark:from-zinc-200/50 dark:to-zinc-300/50 animate-pulse rounded-lg flex items-center justify-center min-h-[400px]">
                    <div className="w-8 h-8 border-2 border-zinc-400 dark:border-zinc-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 bg-zinc-800/50 dark:bg-zinc-200/50 flex items-center justify-center rounded-lg min-h-[400px]">
                    <div className="text-center text-zinc-400 dark:text-zinc-600">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className="text-sm">Error al cargar el certificado</p>
                    </div>
                </div>
            )}

            {/* Imagen */}
            <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={handleLoad}
                onError={handleError}
                priority
            />
        </div>
    );
}



function Trajectory() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const [activeTab, setActiveTab] = useState<'trajectory' | 'certificates'>('trajectory');

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
            certificateUrl: "/certification/CertificadoTalentosDigitales.jpg",
            actionLabel: "Ver Certificado"
        },
        {
            year: "2024",
            title: "Full Stack Developer",
            institution: "Bootcamp 3.0 By Devlights",
            description: "Programa de formación para Full Stack developers, con especialización .NET (C#), SQL Server, MongoDB y Angular",
            technologies: [TAGS.DOTNET, TAGS.CSHARP, TAGS.SQLSERVER, TAGS.MONGODB, TAGS.ANGULAR],
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
        },
        {
            year: "2025",
            title: "Full Stack Developer",
            institution: "Bootcamp 4.0 By Devlights",
            description: "Programa de formación para Full Stack developers, con especialización .NET (C#), SQL Server, MongoDB y React",
            technologies: [TAGS.DOTNET, TAGS.CSHARP, TAGS.SQLSERVER, TAGS.MONGODB, TAGS.REACT],
            type: 'education',
        }
    ];

    const certificates: Certificate[] = [
        {
            id: "talentos-digitales",
            imageUrl: "/certification/CertificadoTalentosDigitales.jpg"
        },
        {
            id: "devlights",
            imageUrl: "/certification/CertificadoDevlights.jpg"
        },
        {
            id: "coder-house",
            imageUrl: "/certification/CertificadoCoderHouse.jpg"
        },
        {
            id: "datacamp-docker",
            imageUrl: "/certification/CertificadoDataCampDocker.jpg"
        },
        {
            id: "datacamp-aws",
            imageUrl: "/certification/CertificadoDataCampAWS.jpg"
        }
    ];

    const handleAction = (item: TimelineItem) => {
        if (item.projectUrl) {
            window.open(item.projectUrl, '_blank')
        }
    }

    return (
        <section id="experience" className="py-20 bg-black dark:bg-white text-white dark:text-black">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header with Tabs */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
                    <motion.h2
                        className="text-5xl md:text-6xl font-light mb-8 lg:mb-0 "
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {activeTab === 'trajectory' ? 'Mi Trayectoria' : 'Mis Certificados'}
                    </motion.h2>

                    {/* Tab Navigation */}
                    <motion.div 
                        className="flex justify-center lg:justify-start mb-8 lg:mb-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex bg-zinc-900/50 dark:bg-zinc-100/50 rounded-full p-1.5 border border-zinc-700 dark:border-zinc-300 w-fit">
                            <button
                                onClick={() => setActiveTab('trajectory')}
                                className={`
                                    flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-[120px] justify-center cursor-pointer
                                    ${activeTab === 'trajectory'
                                        ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg'
                                        : 'text-zinc-400 dark:text-zinc-600 hover:text-white dark:hover:text-black'
                                    }
                                `}
                            >
                                <Briefcase size={16} />
                                Trayectoria
                            </button>
                            <button
                                onClick={() => setActiveTab('certificates')}
                                className={`
                                    flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-[120px] justify-center cursor-pointer
                                    ${activeTab === 'certificates'
                                        ? 'bg-white dark:bg-black text-black dark:text-white shadow-lg'
                                        : 'text-zinc-400 dark:text-zinc-600 hover:text-white dark:hover:text-black'
                                    }
                                `}
                            >
                                <Award size={16} />
                                Certificados
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Content */}
                <div ref={sectionRef}>
                    {activeTab === 'trajectory' ? (
                        <motion.div
                            className="relative"
                            key="trajectory"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Timeline items */}
                            <div className="space-y-0">
                                {timelineItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                    >
                                        <div className="flex gap-6 md:gap-10">

                                            {/* Card container */}
                                            <motion.div 
                                                className={`
                                                    flex-1 relative p-6 md:p-8 rounded-2xl mb-6
                                                    bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 
                                                    dark:from-zinc-100/80 dark:to-zinc-100/40
                                                    border border-zinc-800/50 dark:border-zinc-200/50
                                                    hover:border-zinc-700 dark:hover:border-zinc-300
                                                    transition-all duration-500 ease-out
                                                    hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-zinc-100/20
                                                    group-hover:translate-x-1
                                                `}
                                                whileHover={{ scale: 1.01 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {/* Gradient accent line */}
                                                <div className={`
                                                    absolute left-0 top-6 bottom-6 w-1 rounded-full
                                                    ${item.type === 'education' 
                                                        ? 'bg-gradient-to-b from-blue-500 via-blue-400 to-transparent' 
                                                        : 'bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent'
                                                    }
                                                `} />

                                                {/* Header section */}
                                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                                                    <div className="flex-1 pl-4">
                                                        {/* Year badge with icon */}
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <div className={`
                                                                flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                                                                ${item.type === 'education' 
                                                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                                                                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                                }
                                                            `}>
                                                                <Calendar size={12} />
                                                                <span>{item.year}</span>
                                                            </div>
                                                            
                                                            {/* Type badge */}
                                                            <div className={`
                                                                flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium
                                                                ${item.type === 'education' 
                                                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                                                                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                                }
                                                            `}>
                                                                {item.type === 'education' ? (
                                                                    <>
                                                                        <GraduationCap size={12} />
                                                                        <span>Educación</span>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Briefcase size={12} />
                                                                        <span>Experiencia</span>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Title */}
                                                        <h3 className="text-xl md:text-2xl font-semibold text-white dark:text-black mb-2 tracking-tight">
                                                            {item.title}
                                                        </h3>
                                                        
                                                        {/* Company/Institution with icon */}
                                                        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
                                                            <MapPin size={14} className="flex-shrink-0" />
                                                            <span className="text-base font-medium">
                                                                {item.company || item.institution}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Action button */}
                                                    {(item.certificateUrl || item.projectUrl) && (
                                                        <div className="pl-4 lg:pl-0">
                                                            {item.certificateUrl ? (
                                                                <Dialog>
                                                                    <DialogTrigger asChild>
                                                                        <motion.button 
                                                                            className={`
                                                                                flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                                                                                transition-all duration-300 cursor-pointer
                                                                                ${item.type === 'education'
                                                                                    ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/50'
                                                                                    : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50'
                                                                                }
                                                                            `}
                                                                            whileHover={{ scale: 1.02 }}
                                                                            whileTap={{ scale: 0.98 }}
                                                                        >
                                                                            <Award size={16} />
                                                                            <span>{item.actionLabel}</span>
                                                                        </motion.button>
                                                                    </DialogTrigger>
                                                                    <DialogContent className="max-w-4xl w-full lg:w-auto bg-zinc-900 dark:bg-zinc-100 border-zinc-700 dark:border-zinc-300">
                                                                        <DialogHeader>
                                                                            <DialogTitle className="text-white dark:text-black">Certificado</DialogTitle>
                                                                        </DialogHeader>
                                                                        <div className="flex justify-center py-6">
                                                                            <CertificateImageWithLoading
                                                                                src={item.certificateUrl}
                                                                                alt="Certificado"
                                                                                className="max-w-full max-h-[70vh] object-contain rounded-lg"
                                                                            />
                                                                        </div>
                                                                    </DialogContent>
                                                                </Dialog>
                                                            ) : (
                                                                <motion.button
                                                                    onClick={() => handleAction(item)}
                                                                    className={`
                                                                        flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                                                                        transition-all duration-300 cursor-pointer
                                                                        ${item.type === 'education'
                                                                            ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/50'
                                                                            : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50'
                                                                        }
                                                                    `}
                                                                    whileHover={{ scale: 1.02 }}
                                                                    whileTap={{ scale: 0.98 }}
                                                                >
                                                                    <ExternalLink size={16} />
                                                                    <span>{item.actionLabel}</span>
                                                                </motion.button>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <p className="text-base text-zinc-400 dark:text-zinc-600 leading-relaxed pl-4 mb-5 max-w-3xl">
                                                    {item.description}
                                                </p>

                                                {/* Technologies */}
                                                {item.technologies && item.technologies.length > 0 && (
                                                    <div className="pl-4 pt-4 border-t border-zinc-800/50 dark:border-zinc-200/50">
                                                        <div className="flex flex-wrap gap-2">
                                                            {item.technologies.map((tech, techIndex) => (
                                                                <motion.div
                                                                    key={techIndex}
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                                                                >
                                                                    <TechTag
                                                                        tag={tech}
                                                                        size="sm"
                                                                        variant="default"
                                                                    />
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        /* Certificate Gallery */
                        <motion.div
                            key="certificates"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <CertificateGallery certificates={certificates} />
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Trajectory;