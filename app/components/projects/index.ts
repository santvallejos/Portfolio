// Exportaciones principales del módulo de proyectos
export { default as OptimizedImage } from './OptimizedImage';
export { default as VideoPlayer } from './VideoPlayer';
export { default as TechnologySelector } from './TechnologySelector';
export { default as ProjectLinks } from './ButtonLink';
export { default as ProjectCard } from './Card';
export { useProjectFilter } from './Filter';

// Datos
export { PROJECTS } from './data';

// Tipos (usando los tipos actualizados)
export type { Project, ProjectFilterHook } from '../../types/Project';

// Utilidades
export * from './utils';
