"use client"

import React, { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import TiltedCard from "./reactBits/titleCard";
import LinkButton from './ui/LinkButton';

const TAGS = {
    CSS: {
        name: "CSS",
    },
    TAILWIND: {
        name: "Tailwind",
    },
    BOOTSTRAP: {
        name: "Bootstrap",
    },
    TYPESCRIPT: {
        name: "TypeScript",
    },
    REACT: {
        name: "React",
    },
    ANGULAR: {
        name: "Angular",
    },
    VUE: {
        name: "Vue",
    },
    ASTRO: {
        name: "Astro",
    },
    CSHARP: {
        name: "C#",
    },
    DOTNET: {
        name: "DotNet",
    },
    PHP: {
        name: "PHP",
    },
    LARAVEL: {
        name: "Laravel",
    },
    NODEJS: {
        name: "NodeJS",
    },
    EXPRESS: {
        name: "Express",
    },
    SQLSERVER: {
        name: "MS SQL Server",
    },
    MYSQL: {
        name: "MySQL",
    },
    MONGODB: {
        name: "MongoDB",
    },
    DOCKER: {
        name: "Docker",
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
        <section className="p-5">
            <div className="flex items-center gap-2 mb-4 lg:pl-9 lg:pr-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
                <h2 className="text-xl font-bold">Proyectos Destacables</h2>
            </div>

            {/* Todos los filtros disponibles - ordenados con seleccionados primero */}
            <div className="mb-3 flex flex-wrap gap-2 lg:pl-9 lg:pr-9">
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
                            className={`cursor-pointer transition-all ${selectedTags.includes(tag.name)
                                ? "bg-blue-500"
                                : "hover:bg-blue-500"
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
                                <div className="w-full lg:w-1/2 flex justify-center items-center p-3 lg:p-10">
                                    <TiltedCard
                                        mediaSrc={project.img.replace('/public', '')}
                                        altText={`Imagen de ${project.title}`}
                                        captionText={project.title}
                                        containerHeight="300px"
                                        containerWidth="100%"
                                        mediaHeight="300px"
                                        mediaWidth="100%"
                                        rotateAmplitude={7}
                                        scaleOnHover={1}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                    />
                                </div>

                                {/* Contenedor de la información */}
                                <div className={`w-full lg:w-1/2 p-4 flex flex-col justify-center ${index % 2 === 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                    <p className={`mb-4 text-gray-700 dark:text-gray-300 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>{project.description}</p>

                                    {/* Tags del proyecto */}
                                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                                        {project.tags.map(tag => (
                                            <Badge
                                                key={tag.name}
                                                className={`${selectedTags.includes(tag.name)
                                                    ? "bg-primary"
                                                    : ""
                                                    }`}
                                            >
                                                {tag.name}
                                            </Badge>
                                        ))}
                                    </div>

                                    {/* Enlaces del proyecto - Renderizado condicional */}
                                    <div className={`flex gap-3 mt-2 ${index % 2 === 0 ? '' : 'lg:justify-end'}`}>
                                        {project.githubBackend && (
                                            <LinkButton href={project.githubBackend}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                                <span className="sr-only">Backend</span>
                                            </LinkButton>
                                        )}
                                        {project.githubFrontend && (
                                            <LinkButton href={project.githubFrontend}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                                <span className="sr-only">Frontend</span>
                                            </LinkButton>
                                        )}
                                        {project.github && (
                                            <LinkButton href={project.github}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                                                <span className="sr-only">GitHub</span>
                                            </LinkButton>
                                        )}
                                        {project.web && (
                                            <LinkButton href={project.web}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-world"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                                <span className="sr-only">Web</span>
                                            </LinkButton>
                                        )}
                                        {project.trello && (
                                            <LinkButton href={project.trello}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-trello"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M7 7h3v10h-3z" /><path d="M14 7h3v6h-3z" /></svg>
                                                <span className="sr-only">Trello</span>
                                            </LinkButton>
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