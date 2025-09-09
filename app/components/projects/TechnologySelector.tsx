"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TAGS } from "./tags";

interface TechnologySelectorProps {
    selectedTags: string[];
    onTagSelect: (tagName: string) => void;
    onClearFilters: () => void;
}

const TechnologySelector = ({ 
    selectedTags, 
    onTagSelect, 
    onClearFilters 
}: TechnologySelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Organizar tecnologías por categorías
    const categorizedTags = {
        frontend: Object.values(TAGS).filter(tag => tag.category === 'frontend'),
        backend: Object.values(TAGS).filter(tag => tag.category === 'backend'),
        database: Object.values(TAGS).filter(tag => tag.category === 'database'),
        framework: Object.values(TAGS).filter(tag => tag.category === 'framework'),
        tool: Object.values(TAGS).filter(tag => tag.category === 'tool'),
    };

    const categoryLabels = {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de Datos',
        framework: 'Frameworks',
        tool: 'Herramientas'
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Filtrar por tecnología:
                </h3>
                {selectedTags.length > 0 && (
                    <motion.button
                        onClick={onClearFilters}
                        className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Limpiar filtros ({selectedTags.length})
                    </motion.button>
                )}
            </div>

            {/* Dropdown trigger */}
            <div className="relative">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full sm:w-auto min-w-[280px] px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-left flex items-center justify-between gap-3 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 shadow-sm"
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="text-gray-700 dark:text-gray-300 truncate">
                        {selectedTags.length > 0 
                            ? `${selectedTags.length} tecnología${selectedTags.length > 1 ? 's' : ''} seleccionada${selectedTags.length > 1 ? 's' : ''}`
                            : 'Seleccionar tecnologías'
                        }
                    </span>
                    <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-5 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </motion.button>

                {/* Backdrop */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-10"
                            onClick={handleClickOutside}
                        />
                    )}
                </AnimatePresence>

                {/* Dropdown content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-20 max-h-96 overflow-y-auto"
                        >
                            <div className="p-4 space-y-6">
                                {Object.entries(categorizedTags).map(([category, tags]) => (
                                    <div key={category}>
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                            {categoryLabels[category as keyof typeof categoryLabels]}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {tags.map(tag => (
                                                <motion.button
                                                    key={tag.name}
                                                    onClick={() => onTagSelect(tag.name)}
                                                    className={`
                                                        px-3 py-1.5 rounded-full text-sm font-medium
                                                        transition-all duration-200 cursor-pointer
                                                        ${selectedTags.includes(tag.name)
                                                            ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                                                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                        }
                                                    `}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {tag.name}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Selected tags display */}
            <AnimatePresence>
                {selectedTags.length > 0 && (
                    <motion.div 
                        className="mt-4 flex flex-wrap gap-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {selectedTags.map(tagName => {
                            const tag = Object.values(TAGS).find(t => t.name === tagName);
                            return (
                                <motion.span
                                    key={tagName}
                                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-black text-white dark:bg-white dark:text-black flex items-center gap-2 shadow-sm"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    layout
                                >
                                    {tag?.name}
                                    <motion.button
                                        onClick={() => onTagSelect(tagName)}
                                        className="hover:bg-white/20 dark:hover:bg-black/20 rounded-full p-0.5 transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </motion.button>
                                </motion.span>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TechnologySelector;
