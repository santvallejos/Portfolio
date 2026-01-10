"use client"

import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../types/Project";

interface ProjectLinksProps {
    links: Project['links'];
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
    const linkItems = [
        { 
            key: 'githubBackend', 
            label: 'Backend',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            ),
            title: 'Ver código del Backend'
        },
        { 
            key: 'githubFrontend', 
            label: 'Frontend',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            ),
            title: 'Ver código del Frontend'
        },
        { 
            key: 'github', 
            label: 'Código',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            ),
            title: 'Ver código fuente',
            variant: 'primary' as const
        },
        { 
            key: 'web', 
            label: 'Demo',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
            ),
            title: 'Ver demo en vivo',
            variant: 'primary' as const
        },
        { 
            key: 'trello', 
            label: 'Planificación',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M7 7h3v10h-3z" />
                    <path d="M14 7h3v6h-3z" />
                </svg>
            ),
            title: 'Ver planificación del proyecto'
        },
    ];

    // Filtrar solo los enlaces que existen
    const availableLinks = linkItems.filter(({ key }) => {
        const url = links[key as keyof typeof links];
        return url && url !== 'url' && url.trim() !== '';
    });

    if (availableLinks.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-2">
            {availableLinks.map(({ key, label, icon, title, variant }) => {
                const url = links[key as keyof typeof links];
                const isPrimary = variant === 'primary';

                return (
                    <motion.a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={title}
                        className={`
                            group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg
                            text-sm font-medium tracking-wide
                            transition-all duration-300 ease-out
                            ${isPrimary 
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100' 
                                : 'bg-transparent border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50'
                            }
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-600
                            active:scale-[0.98]
                        `}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ 
                            duration: 0.2,
                            ease: "easeOut"
                        }}
                    >
                        <span className="transition-transform duration-300 group-hover:scale-110">
                            {icon}
                        </span>
                        {label}
                    </motion.a>
                );
            })}
        </div>
    );
};

export default ProjectLinks;
