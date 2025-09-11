import { Project } from '../../types/Project';
import TAGS from '../tags'; // Cambiar a usar las tags centralizadas

// Datos de proyectos
export const PROJECTS: Project[] = [
    {
        id: 'skin',
        title: "Skin",
        description: "Skin es un e-commerce/catálogo que permite gestionar tu propio carrito de compras y confirmar el pedido a través de Whatsapp.",
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SUPABASE],
        links: {
            github: "https://github.com/santvallejos/Skin-WebApp",
            web: "https://skincts.vercel.app/"
        },
        media: {
            type: 'image',
            src: "/projects/1753111419372.jpg"
        }
    },
    {
        id: 'dev-space',
        title: "DevSpace",
        description: "DevSpace es un aplicación que permite centralizar y gestionar tus recursos, tales como: links, textos/notas y líneas de código. Contiene una API que interactúa con la base de datos del usuario y un dashboard para navegar dentro de la unidad de la base de datos.",
        tags: [TAGS.DOTNET, TAGS.MONGODB, TAGS.REACT, TAGS.TAILWIND],
        links: {
            github: "https://github.com/santvallejos/DevSpace-App",
            web: "https://devspace-website.vercel.app/"
        },
        media: {
            type: 'image',
            src: "/projects/961_1x_shots_so.png"
        }
    },
        {
        id: 'aguarago',
        title: "AguaraGo",
        description: "AguaraGo es una asistente virtual que se realizado en la jornada de la HackIAthon by Devlights con el fin de ayudar al turismo en el NEA (Nordeste Argentino). Permite a los usuarios obtener información sobre destinos turísticos, actividades, alojamientos y gastronomía en la región del NEA.",
        tags: [TAGS.NEXTJS, TAGS.TAILWIND, TAGS.LANGCHAIN, TAGS.JAVASCRIPT, TAGS.GEMINI],
        links: {
            github: "https://github.com/santvallejos/AguaraGo",
            web: "https://aguarago.vercel.app/"
        },
        media: {
            type: 'image',
            src: "/projects/651_1x_shots_so.png"
        }
    },
    {
        id: 'calendar-events',
        title: "Calendar Of Events",
        description: "Permite administrar eventos o recordatorios dentro de un calendario, tiene la función de mostrar, crear, actualizar y eliminar eventos de forma sencilla que a su vez a través de SignalR nos avisa cuando un evento ha iniciado.",
        tags: [TAGS.DOTNET, TAGS.CSHARP, TAGS.SQLSERVER, TAGS.ANGULAR, TAGS.BOOTSTRAP],
        links: {
            githubBackend: "https://github.com/santvallejos/calendar-events-backend",
            githubFrontend: "https://github.com/santvallejos/calendar-events-frontend",
            trello: "https://trello.com/b/example/calendar-events",
        },
        media: {
            type: 'video',
            src: "https://youtu.be/iuS38ySs4dU?si=v2sfMW1-H22bhQvl",
            thumbnail: "https://img.youtube.com/vi/iuS38ySs4dU/maxresdefault.jpg"
        }
    },
    {
        id: 'quickmart',
        title: "QuickMart",
        description: "E-commerce de un supermercado que permite crear un usuario, registrarse, obtener una lista de productos para agregar al carrito y en el mismo administrar la cantidad, eliminar o realizar la compra.",
        tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.MYSQL, TAGS.VUE, TAGS.CSS],
        links: {
            github: "https://github.com/santvallejos/quickmart"
        },
        media: {
            type: 'image',
            src: "/projects/QuickMart.jpg"
        }
    },
    {
        id: 'virtualtome',
        title: "VirtualTome",
        description: "Este proyecto es una biblioteca virtual donde puedes administrar una lista de libros, estos poseen: nombre, autor, categoría, url de imagen, fecha de publicación y su ISBN. Cumple las funciones básicas de un CRUD que son: listar, añadir, actualizar y eliminar un libro.",
        tags: [TAGS.NODEJS, TAGS.EXPRESS, TAGS.REACT, TAGS.MYSQL, TAGS.CSS],
        links: {
            githubBackend: "https://github.com/santvallejos/virtualtome-backend",
            githubFrontend: "https://github.com/santvallejos/virtualtome-frontend",
            web: "https://virtualtome.vercel.app"
        },
        media: {
            type: 'video',
            src: "https://youtu.be/IVya-3iXTqo?si=msqMEP2NupdhD8Xa",
            thumbnail: "https://img.youtube.com/vi/IVya-3iXTqo/maxresdefault.jpg"
        }
    }
];
