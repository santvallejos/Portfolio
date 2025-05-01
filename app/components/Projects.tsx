"use client"

import React, { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import TiltedCard from "./reactBits/titleCard";

const TAGS = {
    TAILWIND: {
        name: "Tailwind",
        icon: "/public/icons/tailwind-svgrepo-com.svg"
    },
    TYPESCRIPT: {
        name: "TypeScript",
        icon: "/public/icons/typescript-svgrepo-com.svg"
    },
    REACT: {
        name: "React",
        icon: "/public/icons/react-svgrepo-com.svg"
    },
    ANGULAR: {
        name: "Angular",
        icon: "/public/icons/angular-svgrepo-com.svg"
    },
    VUE: {
        name: "Vue",
        icon: "/public/icons/vue-svgrepo-com.svg"
    },
    ASTRO: {
        name: "Astro",
        icon: "/public/icons/astro-svgrepo-com.svg"
    },
    CSHARP: {
        name: "C#",
        icon: "/public/icons/c-sharp-svgrepo-com.svg"
    },
    DOTNET: {
        name: "DotNet",
        icon: "/public/icons/dotnet-svgrepo-com.svg"
    },
    PHP: {
        name: "PHP",
        icon: "/public/icons/php-svgrepo-com.svg"
    },
    LARAVEL: {
        name: "Laravel",
        icon: "/public/icons/laravel-svgrepo-com.svg"
    },
    NODEJS: {
        name: "NodeJS",
        icon: "/public/icons/nodejs-svgrepo-com.svg"
    },
    EXPRESS: {
        name: "Express",
        icon: "/public/icons/express-svgrepo-com.svg"
    },
    SQLSERVER: {
        name: "SQL Server",
        icon: "/public/icons/sql-server-svgrepo-com.svg"
    },
    MYSQL: {
        name: "MySQL",
        icon: "/public/icons/mysql-svgrepo-com.svg"
    },
    MONGODB: {
        name: "MongoDB",
        icon: "/public/icons/mongodb-svgrepo-com.svg"
    },
    DOCKER: {
        name: "Docker",
        icon: "/public/icons/docker-svgrepo-com.svg"
    },
    TRELLO: {
        name: "Trello",
        icon: "/public/icons/trello-svgrepo-com.svg"
    }
}

const PROJECTS = [
    {
        title: "proyecto 1",
        description: "descripcion del proyecto",
        tags: [TAGS.CSHARP, TAGS.DOTNET, TAGS.MYSQL],
        githubBackend: "url",
        githubFrontend: "url",
        web: "url",
        img: "/contentAboutMe/1.jpg"
    },
    {
        title: "proyecto 2",
        description: "descripcion del proyecto",
        tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SQLSERVER],
        githubBackend: "url",
        githubFrontend: "url",
        web: "url",
        img: "/contentAboutMe/1.jpg"
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

    return(
        <section className="p-5">
            <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
                <h2 className="text-xl font-bold">Proyectos Destacables</h2>
            </div>

            {/* Todos los filtros disponibles - ordenados con seleccionados primero */}
            <div className="mb-6 flex flex-wrap gap-2">
                {Object.values(TAGS)
                    .sort((a, b) => {
                        // Si a está seleccionado y b no, a va primero
                        if (selectedTags.includes(a.name) && !selectedTags.includes(b.name)) {
                            return -1;
                        }
                        // Si b está seleccionado y a no, b va primero
                        if (!selectedTags.includes(a.name) && selectedTags.includes(b.name)) {
                            return 1;
                        }
                        // Si ambos están seleccionados o ambos no están seleccionados, mantener orden original
                        return 0;
                    })
                    .map(tag => (
                        <Badge 
                            key={tag.name} 
                            className={`cursor-pointer transition-all ${
                                selectedTags.includes(tag.name) 
                                    ? "opacity-50" 
                                    : "hover:bg-secondary/80"
                            }`}
                            onClick={() => handleTagClick(tag.name)}
                        >
                            {tag.name}
                        </Badge>
                    ))}
            </div>

            <AnimatePresence>
                <motion.div 
                    className="flex flex-col gap-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div 
                            key={project.title}
                            className="flex flex-col lg:flex-row gap-6 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Contenido del proyecto con orden alternado basado en el índice */}
                            <div className={`flex flex-col lg:flex-row w-full ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                {/* Contenedor de la imagen con TiltedCard */}
                                <div className="w-full lg:w-1/2 flex justify-center items-center p-10">
                                    <TiltedCard 
                                        imageSrc={project.img.replace('/public', '')}
                                        altText={`Imagen de ${project.title}`}
                                        captionText={project.title}
                                        containerHeight="300px"
                                        containerWidth="100%"
                                        imageHeight="300px"
                                        imageWidth="100%"
                                        rotateAmplitude={7}
                                        scaleOnHover={1}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                    />
                                </div>
                                
                                {/* Contenedor de la información */}
                                <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
                                    
                                    {/* Tags del proyecto */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <Badge 
                                                key={tag.name} 
                                                className={`${
                                                    selectedTags.includes(tag.name) 
                                                        ? "bg-primary" 
                                                        : ""
                                                }`}
                                            >
                                                {tag.name}
                                            </Badge>
                                        ))}
                                    </div>
                                    
                                    {/* Enlaces del proyecto */}
                                    <div className="flex gap-3 mt-2">
                                        {project.githubBackend && (
                                            <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                                <span className="sr-only">Backend</span>
                                            </a>
                                        )}
                                        {project.githubFrontend && (
                                            <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                                <span className="sr-only">Frontend</span>
                                            </a>
                                        )}
                                        {project.web && (
                                            <a href={project.web} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                                <span className="sr-only">Web</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default Projects;