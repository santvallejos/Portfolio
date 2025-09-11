"use client"

import { useState, useEffect, useCallback } from "react";
import { Project } from "../../types/Project";

export const useProjectFilter = (projects: Project[]) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    const handleTagClick = useCallback((tagName: string) => {
        setSelectedTags(prevSelectedTags => {
            if (prevSelectedTags.includes(tagName)) {
                return prevSelectedTags.filter(tag => tag !== tagName);
            } else {
                return [...prevSelectedTags, tagName];
            }
        });
    }, []);

    const clearFilters = useCallback(() => {
        setSelectedTags([]);
    }, []);

    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => {
                return project.tags.some(tag => selectedTags.includes(tag.name));
            });
            setFilteredProjects(filtered);
        }
    }, [selectedTags, projects]);

    return {
        selectedTags,
        filteredProjects,
        handleTagClick,
        clearFilters,
        hasActiveFilters: selectedTags.length > 0
    };
};
