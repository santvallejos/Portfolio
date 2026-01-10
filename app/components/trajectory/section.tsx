"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Award, GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { timelineItems, certificates } from "./data";
import { TimelineItem } from "../../types/Trajectory";
import TechTag from "../ui/TechTag";
import { CertificateGallery } from "./CertificateGallery";
import { CertificateImageWithLoading } from "./CertificateImageWithLoading";

function Trajectory() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const [activeTab, setActiveTab] = useState<'trajectory' | 'certificates'>('trajectory');

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