// Exportaciones principales del módulo de proyectos
export { default as OptimizedImage } from './OptimizedImage';
export { default as VideoPlayer } from './VideoPlayer';
export { default as TechnologySelector } from './TechnologySelector';
export { default as ProjectLinks } from './ProjectLinks';
export { default as ProjectCard } from './ProjectCard';
export { useProjectFilter } from './useProjectFilter';

// Datos
export { PROJECTS } from './data';

// Tipos (usando los tipos actualizados)
export type { Project, ProjectFilterHook } from '../../types/Project';

// Utilidades
export * from './utils';
