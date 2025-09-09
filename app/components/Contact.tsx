/* eslint-disable @next/next/no-img-element */
"use client"

import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
    {
        name: "Jack",
        username: "@jack",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Jill",
        username: "@jill",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "John",
        username: "@john",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Jane",
        username: "@jane",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Jenny",
        username: "@jenny",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "James",
        username: "@james",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://avatar.vercel.sh/james",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
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
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

function Contact() {
    return (
        <section id="contact" className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>

            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-16 items-center max-w-4xl mx-auto">
                    {/* Texto de contacto (lado izquierdo) */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-6xl lg:text-7xl font-bold dark:text-black tracking-tight">
                            Contacto
                        </h2>
                        <p className="text-lg dark:text-gray-600 leading-relaxed max-w-md">
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
                                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a 
                                href="https://github.com/santvallejos" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="GitHub"
                                className="group p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-800 dark:hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                            >
                                <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a 
                                href="mailto:santivallejos.dev@gmail.com" 
                                aria-label="Email"
                                className="group p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-400 transition-all duration-300 hover:shadow-lg"
                            >
                                <img src="/icons/email.svg" alt="Email" className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
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