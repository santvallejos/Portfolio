import { Project } from './types';
import { TAGS } from './tags';

// Datos de proyectos
export const PROJECTS: Project[] = [
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
