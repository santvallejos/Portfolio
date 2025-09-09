
import { Tag } from './types';
// Definición de todas las tecnologías con sus propiedades
export const TAGS: Record<string, Tag> = {
    // Frontend Technologies
    REACT: {
        name: 'React',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        category: 'frontend',
    },
    ANGULAR: {
        name: 'Angular',
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        category: 'frontend', 
    },
    VUE: {
        name: 'Vue.js',
        color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        category: 'frontend',
    },
    JAVASCRIPT: {
        name: 'JavaScript',
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        category: 'frontend',
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        category: 'frontend',
    },
    HTML: {
        name: 'HTML',
        color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
        category: 'frontend',
    },
    CSS: {
        name: 'CSS',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        category: 'frontend',
    },
    BOOTSTRAP: {
        name: 'Bootstrap',
        color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        category: 'framework',
    },
    TAILWINDCSS: {
        name: 'Tailwind CSS',
        color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
        category: 'framework',
    },
    NEXT: {
        name: 'Next.js',
        color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
        category: 'framework',
    },

    // Backend Technologies
    NODEJS: {
        name: 'Node.js',
        color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        category: 'backend',
    },
    EXPRESS: {
        name: 'Express',
        color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
        category: 'backend',
    },
    PHP: {
        name: 'PHP',
        color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
        category: 'backend',
    },
    CSHARP: {
        name: 'C#',
        color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
        category: 'backend',
    },
    DOTNET: {
        name: '.NET',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        category: 'framework',
    },
    LARAVEL: {
        name: 'Laravel',
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        category: 'framework',
    },

    // Databases
    MYSQL: {
        name: 'MySQL',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        category: 'database',
    },
    SQLSERVER: {
        name: 'SQL Server',
        color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        category: 'database',
    },
    MONGODB: {
        name: 'MongoDB',
        color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        category: 'database',
    },
    SUPABASE: {
        name: 'Supabase',
        color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
        category: 'database',
    },

    // Tools
    GIT: {
        name: 'Git',
        color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
        category: 'tool',
    },
    TRELLO: {
        name: 'Trello',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        category: 'tool',
    },
    LANGCHAIN: {
        name: 'LangChain',
        color: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
        category: 'tool',
    },
    GEMINI: {
        name: 'Gemini AI',
        color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
        category: 'tool',
    }
};

// Función para obtener tags por categoría
export const getTagsByCategory = (category: Tag['category']) => {
    return Object.values(TAGS).filter(tag => tag.category === category);
};

// Función para obtener un tag por nombre
export const getTagByName = (name: string) => {
    return Object.values(TAGS).find(tag => tag.name === name);
};
