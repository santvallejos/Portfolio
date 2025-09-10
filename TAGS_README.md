# Sistema de Tags para Portfolio

Este sistema proporciona una manera consistente de manejar y mostrar tecnologías y herramientas en el portfolio.

## Estructura de Archivos

```
app/
├── components/
│   ├── tags.ts                    # Definición de todas las tags
│   ├── tagUtils.ts               # Utilidades para trabajar con tags
│   ├── ui/
│   │   └── TechTag.tsx          # Componente para renderizar tags
│   └── examples/
│       └── TagUsageExamples.tsx  # Ejemplos de uso
└── types/
    └── TagConfig.ts              # Interfaz TypeScript
```

## Uso Básico

### 1. Importar tags individuales

```typescript
import TAGS from './components/tags'

const reactTag = TAGS.REACT
// {
//   name: "React",
//   icon: "/icons/react.svg",
//   color: "#61DAFB",
//   class: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20",
//   description: "Biblioteca de JavaScript para construir interfaces de usuario",
//   category: "frontend"
// }
```

### 2. Usar el componente TechTag

```tsx
import TechTag from './components/ui/TechTag'
import TAGS from './components/tags'

const MyComponent = () => {
  return (
    <div className="flex gap-2">
      <TechTag tag={TAGS.REACT} size="md" variant="default" />
      <TechTag tag={TAGS.TYPESCRIPT} size="sm" variant="outline" />
      <TechTag tag="Custom Technology" size="lg" variant="minimal" />
    </div>
  )
}
```

### 3. Utilidades avanzadas

```typescript
import { getTags, searchTags, getTagsByCategory } from './components/tagUtils'

// Obtener múltiples tags
const myTechs = getTags(['REACT', 'TYPESCRIPT', 'TAILWIND'])

// Buscar tags
const reactRelated = searchTags('react') // Encuentra React y Next.js

// Filtrar por categoría
const frontendTags = getTagsByCategory('frontend')
const databaseTags = getTagsByCategory('database')
```

## Tags Disponibles

### Frontend
- `REACT` - React
- `VUE` - Vue.js
- `ANGULAR` - Angular
- `CSS` - CSS
- `TAILWIND` - Tailwind CSS
- `BOOTSTRAP` - Bootstrap

### Backend & Frameworks
- `NODEJS` - Node.js
- `LARAVEL` - Laravel
- `CODEIGNITER` - CodeIgniter
- `DOTNET` - .NET
- `NEXTJS` - Next.js

### Lenguajes
- `JAVASCRIPT` - JavaScript
- `TYPESCRIPT` - TypeScript
- `CSHARP` - C#
- `PHP` - PHP

### Bases de Datos
- `MYSQL` - MySQL
- `SQLSERVER` - SQL Server
- `MONGODB` - MongoDB
- `SUPABASE` - Supabase

### Herramientas
- `DOCKER` - Docker
- `POSTMAN` - Postman

### Inteligencia Artificial
- `GEMINI` - Gemini AI
- `LANGCHAIN` - LangChain

## Agregar Nuevas Tags

1. Agrega el icono SVG a `app/icons/`
2. Importa el icono en `app/components/tags.ts`
3. Agrega la nueva tag al objeto `TAGS`:

```typescript
NUEVA_TECH: {
  name: "Nueva Tecnología",
  icon: nuevaTechIcon,
  color: "#FF5733",
  class: "bg-[#FF5733]/10 text-[#FF5733] border-[#FF5733]/20",
  description: "Descripción de la nueva tecnología",
  category: "frontend" // o la categoría apropiada
}
```

## Componente TechTag Props

- `tag`: TagConfig | string - La configuración de la tag o un string simple
- `size`: 'sm' | 'md' | 'lg' - Tamaño del tag (por defecto: 'md')
- `variant`: 'default' | 'outline' | 'minimal' - Estilo visual (por defecto: 'default')
- `showIcon`: boolean - Mostrar o no el icono (por defecto: true)
- `className`: string - Clases CSS adicionales

## Ejemplo de Uso en Componentes

```tsx
// En tu componente de proyectos
const projectTechnologies = [
  TAGS.REACT,
  TAGS.TYPESCRIPT,
  TAGS.TAILWIND,
  "Tecnología personalizada"
]

return (
  <div className="flex flex-wrap gap-2">
    {projectTechnologies.map((tech, index) => (
      <TechTag 
        key={index}
        tag={tech}
        size="sm"
        variant="default"
      />
    ))}
  </div>
)
```

## Categorías Disponibles

- `frontend` - Tecnologías de frontend
- `backend` - Tecnologías de backend
- `database` - Bases de datos
- `tools` - Herramientas y utilidades
- `framework` - Frameworks
- `language` - Lenguajes de programación
- `ai` - Inteligencia artificial y ML

## Beneficios

1. **Consistencia**: Todas las tags tienen el mismo estilo y comportamiento
2. **Tipado**: TypeScript garantiza que uses tags válidas
3. **Flexibilidad**: Puedes usar tanto tags predefinidas como strings personalizados
4. **Mantenibilidad**: Cambios centralizados en la configuración
5. **Escalabilidad**: Fácil agregar nuevas tecnologías
6. **Accesibilidad**: Iconos con alt text apropiado
