// Ejemplo de uso del sistema de tags

import TAGS, { TagConfig } from '../tags'
import TechTag from '../ui/TechTag'
import { getTags, searchTags, getTagsByCategory } from '../../../lib/tag'

// Ejemplo 1: Usar tags individuales
const singleTag = TAGS.REACT
console.log(singleTag.name) // "React"
console.log(singleTag.color) // "#61DAFB"

// Ejemplo 2: Obtener múltiples tags por clave
const myTechnologies = getTags(['REACT', 'TYPESCRIPT', 'TAILWIND'])
console.log(myTechnologies) // Array de TagConfig

// Ejemplo 3: Buscar tags
const reactRelated = searchTags('react')
console.log(reactRelated) // [React, Next.js]

// Ejemplo 4: Filtrar por categoría
const frontendTags = getTagsByCategory('frontend')
console.log(frontendTags) // [React, Vue.js, Angular, CSS, Tailwind, Bootstrap]

// Ejemplo 5: Componente de ejemplo usando las tags
export const ExampleComponent = () => {
  const projectTechnologies = [
    TAGS.REACT,
    TAGS.TYPESCRIPT,
    TAGS.TAILWIND,
    TAGS.SUPABASE,
    "Custom Framework" // También soporta strings
  ]

  return (
    <div className="space-y-4">
      <h3>Tecnologías del Proyecto</h3>
      <div className="flex flex-wrap gap-2">
        {projectTechnologies.map((tech, index) => (
          <TechTag 
            key={index}
            tag={tech}
            size="md"
            variant="default"
          />
        ))}
      </div>
      
      <h3>Tags Frontend</h3>
      <div className="flex flex-wrap gap-2">
        {frontendTags.map((tag: TagConfig, index: number) => (
          <TechTag 
            key={index}
            tag={tag}
            size="sm"
            variant="outline"
          />
        ))}
      </div>
    </div>
  )
}

// Ejemplo 6: Uso en datos de proyectos
export const exampleProject = {
  name: "Mi Proyecto Web",
  description: "Una aplicación web moderna",
  technologies: [
    TAGS.NEXTJS,
    TAGS.TYPESCRIPT,
    TAGS.TAILWIND,
    TAGS.SUPABASE,
    TAGS.DOCKER
  ],
  // También puedes usar strings para tecnologías no definidas
  additionalTools: ["Figma", "Notion", "GitHub Actions"]
}

const examples = {
  singleTag,
  myTechnologies,
  reactRelated,
  frontendTags,
  ExampleComponent,
  exampleProject
}

export default examples
