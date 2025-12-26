"use client"

import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../types/Project";
import OptimizedImage from "./OptimizedImage";
import VideoPlayer from "./VideoPlayer";
import ProjectLinks from "./ProjectLinks";
import TechTag from "../ui/TechTag"; // Importar el componente TechTag

interface ProjectCardProps {
    project: Project;
    index: number;
    selectedTags: string[];
    onTagClick: (tagName: string) => void;
}

const ProjectCard = ({ project, index, selectedTags }: ProjectCardProps) => {
    const isReversed = index % 2 !== 0;

    return (
        <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div className={`
                flex flex-col lg:flex-row gap-8 lg:gap-12 items-center
                ${isReversed ? 'lg:flex-row-reverse' : ''}
            `}>
                {/* Project Media */}
                <motion.div 
                    className="w-full lg:w-1/2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="relative aspect-video overflow-hidden">
                            {project.media.type === 'video' ? (
                                <VideoPlayer 
                                    src={project.media.src} 
                                    title={project.title}
                                />
                            ) : (
                                <OptimizedImage 
                                    src={project.media.src}
                                    alt={`Imagen de ${project.title}`}
                                    fill
                                    priority={index < 2}
                                    className="group-hover:scale-105 transition-transform duration-500"
                                />
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Project Content */}
                <motion.div 
                    className={`
                        w-full lg:w-1/2 space-y-6
                        ${isReversed ? 'lg:text-right' : 'lg:text-left'}
                    `}
                    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div>
                        <motion.h3 
                            className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {project.title}
                        </motion.h3>
                    </div>

                    <motion.p 
                        className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {project.description}
                    </motion.p>

                    {/* Technology Tags */}
                    <motion.div 
                        className={`
                            flex flex-wrap gap-2
                            ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}
                        `}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {project.tags.map((tag, tagIndex) => (
                            <motion.div
                                key={tag.name}
                                className={`
                                    transition-all duration-200
                                    ${selectedTags.includes(tag.name) 
                                        ? 'ring-2 ring-black dark:ring-white ring-opacity-50 scale-105' 
                                        : 'hover:scale-105'
                                    }
                                `}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                            >
                                <TechTag 
                                    tag={tag} 
                                    size="sm" 
                                    variant="default"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Project Links */}
                    <motion.div 
                        className={`
                            flex gap-3
                            ${isReversed ? 'lg:justify-end' : 'lg:justify-start'}
                        `}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <ProjectLinks links={project.links} />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
