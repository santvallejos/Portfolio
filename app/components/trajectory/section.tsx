"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react";
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
                            className="space-y-20 md:space-y-32"
                            key="trajectory"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
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