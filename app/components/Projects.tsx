"use client"

import React, { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "framer-motion";

const TAGS = {
    HTML: {
        name: "HTML",
        icon: "/public/icons/html-svgrepo-com.svg"
    },
    CSS: {
        name: "CSS",
        icon: "/public/icons/css-svgrepo-com.svg"
    },
    JAVASCRIPT: {
        name: "JavaScript",
        icon: "/public/icons/javascript-svgrepo-com.svg"
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
    C: {
        name: "C",
        icon: "/public/icons/c-svgrepo-com.svg"
    },
    CPLUSPLUS: {
        name: "C++",
        icon: "/public/icons/c-plus-plus-svgrepo-com.svg"
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
        tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
        githubBackend: "url",
        githubFrontend: "url",
        web: "url",
        img: "/public/images/imagen.png"
    },
    {
        title: "proyecto 2",
        description: "descripcion del proyecto",
        tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SQLSERVER],
        githubBackend: "url",
        githubFrontend: "url",
        web: "url",
        img: "/public/images/imagen.png"
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
                <motion.ol 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {filteredProjects.map(project => (
                        <motion.li 
                            key={project.title}
                            className="border rounded-lg p-4 hover:shadow-md transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                            <p className="mb-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
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
                        </motion.li>
                    ))}
                </motion.ol>
            </AnimatePresence>
        </section>
    )
}

export default Projects;