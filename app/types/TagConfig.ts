export interface TagConfig {
  name: string;
  icon: string; // Cambiado para usar rutas de SVG
  color: string;
  class?: string;
  description?: string;
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'framework' | 'language' | 'ai';
}