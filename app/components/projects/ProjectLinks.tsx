"use client"

import React from "react";
import { motion } from "framer-motion";
import { Project } from "./types";

interface ProjectLinksProps {
    links: Project['links'];
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
    const linkItems = [
        { key: 'githubBackend', icon: 'github', title: 'Backend Repository', color: 'gray' },
        { key: 'githubFrontend', icon: 'github', title: 'Frontend Repository', color: 'gray' },
        { key: 'github', icon: 'github', title: 'Repositorio', color: 'gray' },
        { key: 'web', icon: 'globe', title: 'Demo en Vivo', color: 'black' },
        { key: 'trello', icon: 'trello', title: 'Trello', color: 'blue' },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'github':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                );
            case 'globe':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M3.6 9h16.8" />
                        <path d="M3.6 15h16.8" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                );
            case 'trello':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M7 7h3v10h-3z" />
                        <path d="M14 7h3v6h-3z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const getButtonClasses = (color: string) => {
        switch (color) {
            case 'black':
                return 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg';
            case 'blue':
                return 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-300 dark:hover:border-blue-600 shadow-sm';
            default:
                return 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 shadow-sm';
        }
    };

    // Filtrar solo los enlaces que existen
    const availableLinks = linkItems.filter(({ key }) => {
        const url = links[key as keyof typeof links];
        return url && url !== 'url' && url.trim() !== '';
    });

    if (availableLinks.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-3">
            {availableLinks.map(({ key, icon, title, color }) => {
                const url = links[key as keyof typeof links];
                
                return (
                    <motion.a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-200 ${getButtonClasses(color)}`}
                        title={title}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {getIcon(icon)}
                    </motion.a>
                );
            })}
        </div>
    );
};

export default ProjectLinks;
