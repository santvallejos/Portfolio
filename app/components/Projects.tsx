"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Componente para manejar imágenes locales y externas
const OptimizedImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    const isExternal = src.startsWith('http') || src.startsWith('//');
    
    if (isExternal) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
                src={src}
                alt={alt}
                className={className}
            />
        );
    }
    
    return (
        <Image 
            src={src}
            alt={alt}
            fill
            className={className}
        />
    );
};

const TAGS = {
    CSS: {
        name: "CSS",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    TAILWIND: {
        name: "Tailwind",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    },
    TYPESCRIPT: {
        name: "TypeScript",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    REACT: {
        name: "React",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
    },
    ANGULAR: {
        name: "Angular",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    },
    VUE: {
        name: "Vue",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    ASTRO: {
        name: "Astro",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    },
    CSHARP: {
        name: "C#",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    },
    DOTNET: {
        name: "DotNet",
        color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    },
    PHP: {
        name: "PHP",
        color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    },
    LARAVEL: {
        name: "Laravel",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    },
    NODEJS: {
        name: "NodeJS",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    EXPRESS: {
        name: "Express",
        color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    },
    SQLSERVER: {
        name: "MS SQL Server",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    },
    MYSQL: {
        name: "MySQL",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    MONGODB: {
        name: "MongoDB",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    DOCKER: {
        name: "Docker",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    }
}

const PROJECTS = [
    {
        title: "Calendar Of Events",
        description: "Permite administrar eventos o recordatorios dentro de un calendario, tiene la función de mostrar, crear, actualizar y eliminar eventos de forma sencilla que a su vez a través de SignalR nos avisa cuando un evento ha iniciado.",
        tags: [TAGS.DOTNET, TAGS.CSHARP, TAGS.SQLSERVER, TAGS.ANGULAR, TAGS.BOOTSTRAP],
        githubBackend: "url",
        githubFrontend: "url",
        trello: "url",
        img: "https://youtu.be/iuS38ySs4dU?si=v2sfMW1-H22bhQvl"
    },
    {
        title: "QuickMart",
        description: "E-commerce de un supermercado que permite crear un usuario, registrarse, obtener una lista de productos para agregar al carrito y en el mismo administrar la cantidad, eliminar o realizar la compra.",
        tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.MYSQL, TAGS.VUE, TAGS.CSS],
        github: "url",
        img: "/projects/QuickMart.jpg"
    },
    {
        title: "VirtualTome",
        description: "Este proyecto es una biblioteca virtual donde puedes administrar una lista de libros, estos poseen: nombre, autor, categoría, url de imagen, fecha de publicación y su ISBN. Cumple las funciones básicas de un CRUD que son: listar, añadir, actualizar y eliminar un libro.",
        tags: [TAGS.NODEJS, TAGS.EXPRESS, TAGS.REACT, TAGS.MYSQL, TAGS.CSS],
        githubBackend: "url",
        githubFrontend: "url",
        web: "url",
        img: "https://youtu.be/IVya-3iXTqo?si=msqMEP2NupdhD8Xa"
    }
];

function Projects() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

    // Función para manejar la selección de tags
    const handleTagClick = (tagName: string) => {
        setSelectedTags(prevSelectedTags => {
            // Si el tag ya está seleccionado, lo quitamos
            if (prevSelectedTags.includes(tagName)) {
                return prevSelectedTags.filter(tag => tag !== tagName);
            }
            // Si no está seleccionado, lo añadimos
            else {
                return [...prevSelectedTags, tagName];
            }
        });
    };

    // Filtrar proyectos cuando cambian los tags seleccionados
    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilteredProjects(PROJECTS);
        } else {
            const filtered = PROJECTS.filter(project => {
                return project.tags.some(tag => selectedTags.includes(tag.name));
            });
            setFilteredProjects(filtered);
        }
    }, [selectedTags]);

    return (
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="flex items-center gap-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 dark:text-gray-300">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
                            <path d="M20 21l2 -2l-2 -2" />
                            <path d="M17 17l-2 2l2 2" />
                        </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Proyectos Destacables
                    </h2>
                </motion.div>

                {/* Filter Tags */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                        Filtrar por tecnología:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {Object.values(TAGS)
                            .sort((a, b) => {
                                if (selectedTags.includes(a.name) && !selectedTags.includes(b.name)) {
                                    return -1;
                                }
                                if (!selectedTags.includes(a.name) && selectedTags.includes(b.name)) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map(tag => (
                                <motion.button
                                    key={tag.name}
                                    onClick={() => handleTagClick(tag.name)}
                                    className={`
                                        px-3 py-1.5 rounded-full text-sm font-medium
                                        transition-all duration-200 cursor-pointer
                                        border border-gray-200 dark:border-gray-700
                                        ${selectedTags.includes(tag.name)
                                            ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white'
                                            : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                                        }
                                    `}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tag.name}
                                </motion.button>
                            ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        className="space-y-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="group"
                            >
                                <div className={`
                                    flex flex-col lg:flex-row gap-8 lg:gap-12 items-center
                                    ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}
                                `}>
                                    {/* Project Image/Video */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                                            {/* Image/Video container */}
                                            <div className="relative aspect-video overflow-hidden">
                                                {project.img.includes('youtube') || project.img.includes('youtu.be') ? (
                                                    // Video thumbnail with play button
                                                    <div className="relative w-full h-full group/video cursor-pointer">
                                                        <OptimizedImage 
                                                            src={`https://img.youtube.com/vi/${project.img.split('v=')[1]?.split('&')[0] || project.img.split('/')[3]?.split('?')[0]}/maxresdefault.jpg`}
                                                            alt={`Video de ${project.title}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        {/* Play button overlay */}
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                                            <div className="bg-white/90 dark:bg-black/90 rounded-full p-3 shadow-lg">
                                                                <svg className="w-6 h-6 text-black dark:text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path d="M8 5v14l11-7z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // Static image
                                                    <OptimizedImage 
                                                        src={project.img.replace('/public', '')}
                                                        alt={`Imagen de ${project.title}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className={`
                                        w-full lg:w-1/2 space-y-6
                                        ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}
                                    `}>
                                        <h3 
                                            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                                        >
                                            {project.title}
                                        </h3>

                                        <p 
                                            className="text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg"
                                        >
                                            {project.description}
                                        </p>

                                        {/* Technology Tags */}
                                        <div 
                                            className={`
                                                flex flex-wrap gap-2
                                                ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}
                                            `}
                                        >
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag.name}
                                                    className={`
                                                        px-3 py-1 rounded-full text-xs font-medium
                                                        ${tag.color}
                                                        ${selectedTags.includes(tag.name) 
                                                            ? 'ring-2 ring-black dark:ring-white ring-opacity-50' 
                                                            : ''
                                                        }
                                                    `}
                                                >
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Project Links */}
                                        <div 
                                            className={`
                                                flex gap-3
                                                ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}
                                            `}
                                        >
                                            {project.githubBackend && (
                                                <a
                                                    href={project.githubBackend}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
                                                    title="Backend Repository"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.githubFrontend && (
                                                <a
                                                    href={project.githubFrontend}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
                                                    title="Frontend Repository"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
                                                    title="Repositorio"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.web && (
                                                <a
                                                    href={project.web}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                                                    title="Demo en Vivo"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                        <path d="M3.6 9h16.8" />
                                                        <path d="M3.6 15h16.8" />
                                                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                                                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.trello && (
                                                <a
                                                    href={project.trello}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
                                                    title="Trello"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                        <path d="M7 7h3v10h-3z" />
                                                        <path d="M14 7h3v6h-3z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Projects;