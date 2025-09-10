"use client"

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "./data";
import { useProjectFilter } from "./useProjectFilter";
import TechnologySelector from "./TechnologySelector";
import ProjectCard from "./ProjectCard";

function Projects() {
    const { selectedTags, filteredProjects, handleTagClick, clearFilters, hasActiveFilters } = useProjectFilter(PROJECTS);

    return (
        <section id="projects" className="py-16 px-4 md:px-8 lg:px-12 bg-white dark:bg-black">
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

                {/* Filter Section */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <TechnologySelector
                        selectedTags={selectedTags}
                        onTagSelect={handleTagClick}
                        onClearFilters={clearFilters}
                    />
                </motion.div>

                {/* Results Counter */}
                <AnimatePresence>
                    {hasActiveFilters && (
                        <motion.div 
                            className="mb-8 text-center"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-gray-600 dark:text-gray-400">
                                Mostrando {filteredProjects.length} de {PROJECTS.length} proyectos
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            className="space-y-20"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            key="projects-list"
                        >
                            {filteredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    selectedTags={selectedTags}
                                    onTagClick={handleTagClick}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            className="text-center py-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            key="no-results"
                        >
                            <div className="max-w-md mx-auto">
                                <motion.svg 
                                    className="w-16 h-16 text-gray-400 mx-auto mb-4" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.44-1.01-5.904-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </motion.svg>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    No se encontraron proyectos
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    No hay proyectos que coincidan con los filtros seleccionados.
                                </p>
                                <motion.button
                                    onClick={clearFilters}
                                    className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Ver todos los proyectos
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Projects;