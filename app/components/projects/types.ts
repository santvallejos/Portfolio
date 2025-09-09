// Tipos TypeScript para proyectos
export interface Tag {
    name: string;
    color: string;
    category?: 'frontend' | 'backend' | 'database' | 'framework' | 'tool';
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: Tag[];
    links: {
        github?: string;
        githubBackend?: string;
        githubFrontend?: string;
        web?: string;
        trello?: string;
        demo?: string;
    };
    media: {
        type: 'image' | 'video';
        src: string;
        thumbnail?: string;
    };
    status?: 'completed' | 'in-progress' | 'concept';
}

export interface ProjectFilterHook {
    selectedTags: string[];
    filteredProjects: Project[];
    handleTagClick: (tagName: string) => void;
    clearFilters: () => void;
    hasActiveFilters: boolean;
}
