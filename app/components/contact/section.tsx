/* eslint-disable @next/next/no-img-element */
"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const reviews = [
    {
        id: "skin-1",
        name: "Skin",
        username: "@skin",
        body: "Muchas gracias por llevar a cabo nuestra página web, Santiago. Quedó excelente y estamos muy contentos con el resultado. ¡Te deseamos mucho éxito en tus futuros proyectos!",
        img: "/imgsContacts/504081956_17873026191361415_4733661700109419317_n.jpg",
    },
    {
        id: "fernando-1",
        name: "Fernando Luján",
        username: "@fernandolujan",
        body: "Qué bueno ver cómo va tomando forma el proyecto!",
        img: "/imgsContacts/1516489653690.jpg",
    },
    {
        id: "devlights-1",
        name: "Devlights",
        username: "@devlights",
        body: "Gracias Santiago por ser parte de HackIAthon 🙌 El proyecto y la experiencia que se llevan son un gran logro🚀",
        img: "/imgsContacts/devlights_logo.jpg",
    },
    {
        id: "nicolas-1",
        name: "Nicolás Ariel Sena",
        username: "@nicolasarenasena",
        body: "Que buena página, se ve re linda y vuela, tanto en móvil como desktop. Felicidades!",
        img: "/imgsContacts/1732229843063.jpg",
    },
    {
        id: "fernando-2",
        name: "Fernando Luján",
        username: "@fernandolujan",
        body: "¡Excelente desarrollo Santi! Es un placer observar el progreso que has demostrado hasta ahora. Me complace enormemente ser testigo de tus logros y la dedicación que has invertido. Seguí por este camino que los resultados hablan por sí solos. Tus esfuerzos y dedicación son verdaderamente ejemplares. Seguí adelante con esta misma energía y determinación, el éxito te espera. ¡Muchas felicitaciones por este gran avance!",
        img: "/imgsContacts/1516489653690.jpg",
    },
    {
        id: "sherpa-1",
        name: "Sherpa.wtf",
        username: "@sherpa.wtf",
        body: "¡Nos emociona que hayas participado en la prueba técnica y que estés orgulloso del resultado que lograste, Santi! 🎉💻\nEstaremos en contacto contigo. ¡Un saludo y a seguir programando! 🚀😊",
        img: "/imgsContacts/1732818756735.jpg",
    },
    {
        id: "fernando-3",
        name: "Fernando Luján",
        username: "@fernandolujan",
        body: "Qué bueno ver en qué se convirtió un simple ejercicio práctico! Muy bien hecho! Te felicito!!!",
        img: "/imgsContacts/1516489653690.jpg",
    },
    {
        id: "gabriel-1",
        name: "Gabriel Bergese",
        username: "@gabrielbergese",
        body: "Interesante proyecto! Gracias",
        img: "/imgsContacts/1730812644444.jpg",
    },
    {
        id: "devlights-2",
        name: "Devlights",
        username: "@devlights",
        body: "Qué bueno verte compartiendo tu experiencia Santiago🎉 Ha sido un placer acompañarte en este proceso y ver cómo tu dedicación y esfuerzo se reflejaron en cada paso del Bootcamp. Estamos seguros de que este es solo el comienzo de un camino lleno de éxitos. 🚀 ¡Felicitaciones!",
        img: "/imgsContacts/devlights_logo.jpg",
    },
    {
        id: "fernando-4",
        name: "Fernando Luján",
        username: "@fernandolujan",
        body: "Tuve el privilegio de ser instructor de Santiago en nuestra reciente bootcamp de .NET y me gustaría destacar su excelente desempeño. Desde el inicio, demostró un profundo entendimiento de los conceptos y una gran capacidad para aplicarlos en la práctica. Su dedicación y pasión por el desarrollo fueron evidentes a lo largo del curso. Lo más impresionante fue su trabajo final, donde decidió ir más allá de lo aprendido en clase e implementó SignalR, una tecnología avanzada que no habíamos cubierto. Esta iniciativa no solo muestra su compromiso con el aprendizaje continuo, sino también su habilidad para enfrentar y resolver desafíos por cuenta propia. Estoy seguro de que Santiago tiene un futuro brillante en el mundo del desarrollo de software, y recomiendo encarecidamente a cualquier equipo que esté buscando un desarrollador talentoso e innovador que lo considere. ¡Felicitaciones, Santiago, por tu extraordinario trabajo y tus logros!",
        img: "/imgsContacts/1516489653690.jpg",
    },
    {
        id: "devlights-3",
        name: "Devlights",
        username: "@devlights",
        body: "¡Felicitaciones, Santiago! 🎉 Tu dedicación y esfuerzo brillaron durante el Bootcamp 3.0, y DevNet es un gran ejemplo de lo que se puede lograr trabajando en equipo. Estamos orgullosos de haber sido parte de tu crecimiento profesional. ¡A seguir alcanzando nuevas metas! 💪💻",
        img: "/imgsContacts/devlights_logo.jpg",
    },
    {
        id: "devlights-4",
        name: "Devlights",
        username: "@devlights",
        body: "¡Gracias Santiago por tus palabras! Estamos muy felices y orgullosos de cada uno que forma parte del Bootcamp 3.0❤️🚀",
        img: "/imgsContacts/devlights_logo.jpg",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Función para truncar texto
const truncateText = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
};

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    const isLongText = body.length > 100;
    const previewText = truncateText(body, 100);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <figure
                    className={cn(
                        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300",
                        // light styles
                        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                        // dark styles
                        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                        // Hover effect for long text
                        isLongText && "hover:shadow-md hover:scale-[1.01]"
                    )}
                >
                    <div className="flex flex-row items-center gap-2">
                        <img className="rounded-full" width="32" height="32" alt="" src={img} />
                        <div className="flex flex-col">
                            <figcaption className="text-sm font-medium dark:text-white">
                                {name}
                            </figcaption>
                            <p className="text-xs font-medium dark:text-white/40">{username}</p>
                        </div>
                    </div>
                    <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        {previewText}
                    </blockquote>
                </figure>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <div className="flex items-center gap-3 mb-4">
                        <img className="rounded-full" width="48" height="48" alt="" src={img} />
                        <div>
                            <DialogTitle className="text-lg font-semibold dark:text-white">
                                {name}
                            </DialogTitle>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
                        </div>
                    </div>
                </DialogHeader>
                <div className="mt-4">
                    <blockquote className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {body}
                    </blockquote>
                </div>
            </DialogContent>
        </Dialog>
    );
};

function Contact() {
    return (
        <section id="contact" className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-16 items-center max-w-4xl mx-auto">
                    {/* Texto de contacto (lado izquierdo) */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-6xl lg:text-7xl font-bold tracking-tight">
                            Contacto
                        </h2>
                        <p className="text-lg leading-relaxed max-w-md">
                            ¿Te interesó mi perfil? ¡Podés contactarme por cualquiera de mis redes o descargar mi CV!
                        </p>
                    </div>

                    {/* Redes sociales y CV (lado derecho) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end space-y-8">
                        {/* Redes sociales */}
                        <div className="flex gap-6">
                            <a
                                href="https://www.linkedin.com/in/santivallejos/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="group p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
                            >

                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                            </a>
                            <a
                                href="https://github.com/santvallejos"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="group p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-800 dark:hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                            </a>
                            <a
                                href="mailto:santivallejos.dev@gmail.com"
                                aria-label="Email"
                                className="group p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 transition-all duration-300 hover:shadow-lg"
                            >
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                            </a>
                        </div>

                        {/* Botón de CV */}
                        <a
                            href="/cv_santiago_vallejos.pdf"
                            download
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            <span className="mr-2">Descargar CV</span>
                            <svg
                                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;