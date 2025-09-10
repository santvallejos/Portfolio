import TAGS, { TagConfig } from '../app/components/tags'

/**
 * Obtiene una tag por su clave
 * @param key - La clave de la tag en el objeto TAGS
 * @returns La configuración de la tag o undefined si no existe
 */
export const getTag = (key: string): TagConfig | undefined => {
  return TAGS[key as keyof typeof TAGS]
}

/**
 * Obtiene múltiples tags por sus claves
 * @param keys - Array de claves de tags
 * @returns Array de configuraciones de tags
 */
export const getTags = (keys: string[]): TagConfig[] => {
  return keys.map(key => getTag(key)).filter(Boolean) as TagConfig[]
}

/**
 * Filtra tags por categoría
 * @param category - La categoría a filtrar
 * @returns Array de tags que pertenecen a la categoría
 */
export const getTagsByCategory = (category: TagConfig['category']): TagConfig[] => {
  return Object.values(TAGS).filter(tag => tag.category === category)
}

/**
 * Busca tags por nombre (búsqueda parcial, insensible a mayúsculas)
 * @param searchTerm - Término de búsqueda
 * @returns Array de tags que coinciden con la búsqueda
 */
export const searchTags = (searchTerm: string): TagConfig[] => {
  const term = searchTerm.toLowerCase()
  return Object.values(TAGS).filter(tag => 
    tag.name.toLowerCase().includes(term) ||
    tag.description?.toLowerCase().includes(term)
  )
}

/**
 * Convierte un array mixto de strings y TagConfig a solo TagConfig
 * @param technologies - Array mixto de tecnologías
 * @returns Array de TagConfig, convirtiendo strings a tags básicas
 */
export const normalizeTechnologies = (technologies: (string | TagConfig)[]): TagConfig[] => {
  return technologies.map(tech => {
    if (typeof tech === 'string') {
      // Buscar si existe una tag con ese nombre
      const foundTag = Object.values(TAGS).find(tag => 
        tag.name.toLowerCase() === tech.toLowerCase()
      )
      
      if (foundTag) {
        return foundTag
      }
      
      // Si no se encuentra, crear una tag básica
      return {
        name: tech,
        icon: '',
        color: '#6B7280',
        class: 'bg-zinc-800/30 text-zinc-400',
        description: tech
      }
    }
    return tech
  })
}

// Constantes útiles para categorizar
export const FRONTEND_TAGS = getTagsByCategory('frontend')
export const BACKEND_TAGS = getTagsByCategory('backend')
export const DATABASE_TAGS = getTagsByCategory('database')
export const TOOLS_TAGS = getTagsByCategory('tools')

// Tags más comunes para acceso rápido
export const POPULAR_TAGS = {
  REACT: TAGS.REACT,
  NEXTJS: TAGS.NEXTJS,
  TYPESCRIPT: TAGS.TYPESCRIPT,
  TAILWIND: TAGS.TAILWIND,
  NODEJS: TAGS.NODEJS,
  LARAVEL: TAGS.LARAVEL,
  MYSQL: TAGS.MYSQL,
  DOCKER: TAGS.DOCKER
} as const

const tagUtils = {
  getTag,
  getTags,
  getTagsByCategory,
  searchTags,
  normalizeTechnologies,
  FRONTEND_TAGS,
  BACKEND_TAGS,
  DATABASE_TAGS,
  TOOLS_TAGS,
  POPULAR_TAGS
}

export default tagUtils
