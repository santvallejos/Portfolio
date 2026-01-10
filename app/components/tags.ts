// Importar todos los iconos
import angular from "../icons/angular.svg"
import bootstrap from "../icons/bootstrap.svg"
import codeigniter from "../icons/codeigniter.svg"
import csharp from "../icons/csharp.svg"
import css from "../icons/css.svg"
import docker from "../icons/docker.svg"
import gemini from "../icons/gemini.svg"
import javascript from "../icons/javascript.svg"
import laravel from "../icons/laravel.svg"
import mongodb from "../icons/mongodb.svg"
import mysql from "../icons/mysql.svg"
import nextjs from "../icons/nextjs.svg"
import nodejs from "../icons/nodejs.svg"
import express from "../icons/express.svg"
import postman from "../icons/postman.svg"
import react from "../icons/react.svg"
import langchain from "../icons/simple-icons--langchain.svg"
import dotnet from "../icons/skill-icons--dotnet.svg"
import sqlserver from "../icons/sqlserver.svg"
import supabase from "../icons/supabase.svg"
import tailwind from "../icons/tailwind.svg"
import typescript from "../icons/typescript.svg"
import php from "../icons/vscode-icons--file-type-php2.svg"
import vue from "../icons/vue.svg"
import postgresql from "../icons/postgresql.svg"
import java from "../icons/java.svg"

// Importar el tipo desde el archivo de tipos
import { TagConfig } from "../types/TagConfig"

export type { TagConfig }

const TAGS: Record<string, TagConfig> = {
  // Frontend Frameworks & Libraries
  REACT: {
    name: "React",
    icon: react,
    color: "#61DAFB",
    class: "bg-[#61DAFB]/10 text-[#61DAFB] border-[#61DAFB]/20",
    description: "Biblioteca de JavaScript para construir interfaces de usuario",
    category: "frontend"
  },
  VUE: {
    name: "Vue.js",
    icon: vue,
    color: "#4FC08D",
    class: "bg-[#4FC08D]/10 text-[#4FC08D] border-[#4FC08D]/20",
    description: "Framework progresivo de JavaScript",
    category: "frontend"
  },
  ANGULAR: {
    name: "Angular",
    icon: angular,
    color: "#DD0031",
    class: "bg-[#DD0031]/10 text-[#DD0031] border-[#DD0031]/20",
    description: "Plataforma para aplicaciones web",
    category: "frontend"
  },
  NEXTJS: {
    name: "Next.js",
    icon: nextjs,
    color: "#000000",
    class: "bg-black/30 dark:text-white border-zinc-600",
    description: "Framework de React para producción",
    category: "framework"
  },

  // Backend & Server
  NODEJS: {
    name: "Node.js",
    icon: nodejs,
    color: "#339933",
    class: "bg-[#339933]/10 text-[#339933] border-[#339933]/20",
    description: "Entorno de ejecución de JavaScript",
    category: "backend"
  },
  EXPRESS: {
    name: "Express",
    icon: express, // Usamos el mismo icono de Node.js por ahora
    color: "#000000",
    class: "bg-black/10 text-black border-black/20 dark:bg-white/10 dark:text-white dark:border-white/20",
    description: "Framework web minimalista para Node.js",
    category: "backend"
  },
  LARAVEL: {
    name: "Laravel",
    icon: laravel,
    color: "#FF2D20",
    class: "bg-[#FF2D20]/10 text-[#FF2D20] border-[#FF2D20]/20",
    description: "Framework de PHP para aplicaciones web",
    category: "framework"
  },
  CODEIGNITER: {
    name: "CodeIgniter",
    icon: codeigniter,
    color: "#EF4223",
    class: "bg-[#EF4223]/10 text-[#EF4223] border-[#EF4223]/20",
    description: "Framework de PHP ligero",
    category: "framework"
  },
  DOTNET: {
    name: ".NET",
    icon: dotnet,
    color: "#512BD4",
    class: "bg-[#512BD4]/10 text-[#512BD4] border-[#512BD4]/20",
    description: "Plataforma de desarrollo de Microsoft",
    category: "framework"
  },

  // Lenguajes de Programación
  JAVASCRIPT: {
    name: "JavaScript",
    icon: javascript,
    color: "#F7DF1E",
    class: "bg-[#F7DF1E]/10 text-[#F7DF1E] border-[#F7DF1E]/20",
    description: "Lenguaje de programación dinámico",
    category: "language"
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: typescript,
    color: "#3178C6",
    class: "bg-[#3178C6]/10 text-[#3178C6] border-[#3178C6]/20",
    description: "JavaScript con tipado estático",
    category: "language"
  },
  CSHARP: {
    name: "C#",
    icon: csharp,
    color: "#239120",
    class: "bg-[#239120]/10 text-[#239120] border-[#239120]/20",
    description: "Lenguaje de programación de Microsoft",
    category: "language"
  },
  PHP: {
    name: "PHP",
    icon: php,
    color: "#777BB4",
    class: "bg-[#777BB4]/10 text-[#777BB4] border-[#777BB4]/20",
    description: "Lenguaje de scripting del lado del servidor",
    category: "language"
  },
    JAVA: {
    name: "Java",
    icon: java,
    color: "#007396",
    class: "bg-black/10 dark:bg-white/10 dark:text-white border-black/20 dark:border-white/20",
    description: "Lenguaje de programación orientado a objetos",
    category: "language"
  },

  // Estilos & CSS
  CSS: {
    name: "CSS",
    icon: css,
    color: "#1572B6",
    class: "bg-[#1572B6]/10 text-[#1572B6] border-[#1572B6]/20",
    description: "Hojas de estilo en cascada",
    category: "frontend"
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#06B6D4",
    class: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20",
    description: "Framework de CSS utilitario",
    category: "frontend"
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: bootstrap,
    color: "#7952B3",
    class: "bg-[#7952B3]/10 text-[#7952B3] border-[#7952B3]/20",
    description: "Framework de CSS para desarrollo responsive",
    category: "frontend"
  },

  // Bases de Datos
  MYSQL: {
    name: "MySQL",
    icon: mysql,
    color: "#4479A1",
    class: "bg-[#4479A1]/10 text-[#4479A1] border-[#4479A1]/20",
    description: "Sistema de gestión de base de datos relacional",
    category: "database"
  },
  SQLSERVER: {
    name: "SQL Server",
    icon: sqlserver,
    color: "#CC2927",
    class: "bg-[#CC2927]/10 text-[#CC2927] border-[#CC2927]/20",
    description: "Sistema de base de datos de Microsoft",
    category: "database"
  },
  MONGODB: {
    name: "MongoDB",
    icon: mongodb,
    color: "#47A248",
    class: "bg-[#47A248]/10 text-[#47A248] border-[#47A248]/20",
    description: "Base de datos NoSQL orientada a documentos",
    category: "database"
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: postgresql,
    color: "#336791",
    class: "bg-[#336791]/10 text-[#336791] border-[#336791]/20",
    description: "Sistema de gestión de base de datos relacional avanzado",
    category: "database"
  },

  // Herramientas & DevOps
  DOCKER: {
    name: "Docker",
    icon: docker,
    color: "#2496ED",
    class: "bg-[#2496ED]/10 text-[#2496ED] border-[#2496ED]/20",
    description: "Plataforma de contenedorización",
    category: "tools"
  },
  POSTMAN: {
    name: "Postman",
    icon: postman,
    color: "#FF6C37",
    class: "bg-[#FF6C37]/10 text-[#FF6C37] border-[#FF6C37]/20",
    description: "Herramienta para testing de APIs",
    category: "tools"
  },
    SUPABASE: {
    name: "Supabase",
    icon: supabase,
    color: "#3ECF8E",
    class: "bg-[#3ECF8E]/10 text-[#3ECF8E] border-[#3ECF8E]/20",
    description: "Plataforma de backend como servicio",
    category: "database"
  },

  // AI & Machine Learning
  GEMINI: {
    name: "Gemini AI",
    icon: gemini,
    color: "#4285F4",
    class: "bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20",
    description: "Modelo de IA de Google",
    category: "ai"
  },
  LANGCHAIN: {
    name: "LangChain",
    icon: langchain,
    color: "#1C3C3C",
    class: "bg-[#1C3C3C]/10 text-[#1C3C3C] border-[#1C3C3C]/20",
    description: "Framework para aplicaciones con LLM",
    category: "ai"
  }
}

export default TAGS;