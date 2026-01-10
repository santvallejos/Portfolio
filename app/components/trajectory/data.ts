import { TimelineItem, Certificate } from "../../types/Trajectory";
import TAGS from "../tags";

export const timelineItems: TimelineItem[] = [
    {
        year: "2022 - Presente",
        title: "Licenciatura en Sistemas de la Información",
        company: "Universidad Nacional del Nordeste",
        description: "Carrera de grado en sistemas de información",
        type: "education",
    },
    {
        year: "2023-2024",
        title: "Full Stack Developer",
        institution: "Talentos Digitales",
        description:
            "Programa de formación para Full Stack developers, con especialización en PHP (Laravel), MySQL y Vue.JS",
        technologies: [
            TAGS.PHP,
            TAGS.LARAVEL,
            TAGS.CODEIGNITER,
            TAGS.BOOTSTRAP,
            TAGS.MYSQL,
            TAGS.VUE,
            TAGS.NODEJS,
            TAGS.JAVASCRIPT,
        ],
        type: "education",
        certificateUrl: "/certification/CertificadoTalentosDigitales.jpg",
        actionLabel: "Ver Certificado",
    },
    {
        year: "2024",
        title: "Full Stack Developer",
        institution: "Bootcamp 3.0 By Devlights",
        description:
            "Programa de formación para Full Stack developers, con especialización .NET (C#), SQL Server, MongoDB y Angular",
        technologies: [
            TAGS.DOTNET,
            TAGS.CSHARP,
            TAGS.SQLSERVER,
            TAGS.MONGODB,
            TAGS.ANGULAR,
        ],
        type: "education",
        certificateUrl: "/certification/CertificadoDevlights.jpg",
        actionLabel: "Ver Certificado",
    },
    {
        year: "2025 - Presente",
        title: "Inglés Británico",
        institution: "Universidad Nacional del Nordeste",
        description: "Curso de inglés británico desde A1 hasta B2",
        type: "education",
    },
    {
        year: "2025 - Presente",
        title: "Web developer",
        company: "Skin",
        description:
            "Desarrollo de sitio web de manera freelance para Skin, e-commerce de accersorios para dispositivos móviles.",
        technologies: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.SUPABASE],
        type: "work",
        projectUrl: "https://skincts.vercel.app/",
        actionLabel: "Ver sitio web",
    },
    {
        year: "2025 - Presente",
        title: "Frontend Developer",
        company: "Inside Dark Studio",
        description:
            "Pasante como desarrollador frontend, colaborando en proyectos de desarrollo web y aplicaciones utilizando tecnologías modernas.",
        technologies: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
        type: "work",
        projectUrl: "https://insidedarkstudio.com",
        actionLabel: "Ver Empresa",
    },
    {
        year: "2025",
        title: "Full Stack Developer",
        institution: "Bootcamp 4.0 By Devlights",
        description:
            "Programa de formación para Full Stack developers, con especialización .NET (C#), SQL Server, MongoDB y React",
        technologies: [
            TAGS.DOTNET,
            TAGS.CSHARP,
            TAGS.SQLSERVER,
            TAGS.MONGODB,
            TAGS.REACT,
            TAGS.NEXTJS
        ],
        type: "education",
        certificateUrl: "/certification/CertificadoDevlights4-0.jpg",
        actionLabel: "Ver Certificado",
    },
];

export const certificates: Certificate[] = [
    {
        id: "coder-house",
        imageUrl: "/certification/CertificadoCoderHouse.jpg",
    },
    {
        id: "talentos-digitales",
        imageUrl: "/certification/CertificadoTalentosDigitales.jpg",
    },
    {
        id: "devlights",
        imageUrl: "/certification/CertificadoDevlights.jpg",
    },
    {
        id: "datacamp-docker",
        imageUrl: "/certification/CertificadoDataCampDocker.jpg",
    },
    {
        id: "datacamp-aws",
        imageUrl: "/certification/CertificadoDataCampAWS.jpg",
    },
    {
        id: "devlights-4-0",
        imageUrl: "/certification/CertificadoDevlights4-0.jpg",
    },
];
