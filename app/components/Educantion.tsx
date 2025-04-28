"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

type TimelineItem = {
    year: string
    title: string
    description: string
    institution?: string
}

export default function Timeline() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])
    const [lineHeight, setLineHeight] = useState(0)

    const timelineItems: TimelineItem[] = [
        {
            year: "2022",
            title: "Licenciatura en sistemas de la información",
            description: "Carrera de grado en sistemas de información",
            institution: "Universidad Nacional del Nordeste",
        },
        {
            year: "2023-2024",
            title: "Full Stack Developer",
            description: "Programa de formación para Full Stack developers, con especialización en PHP (Laravel), MySQL y Vue.JS",
            institution: "Talentos Digitales",
        },
        {
            year: "2024-2025",
            title: "Full Stack Developer",
            description: "Bootcamp de formación para Full Stack developers, con especialización en .Net, MS SQL Server, MongoDB y Angular",
            institution: "Bootcamp 3.0 By Devlights",
        },
        {
            year: "2025",
            title: "Ingles Británico",
            description: "Curso de ingles británico para jovenes y adultos hasta nivel B2",
            institution: "Universidad Nacional del Nordeste",
        },
    ]

    // Actualizar la altura de la línea cuando los elementos se rendericen
    useEffect(() => {
        const updateLineHeight = () => {
            if (itemRefs.current.length > 0) {
                const lastItem = itemRefs.current[itemRefs.current.length - 1]
                if (lastItem) {
                    const lastItemRect = lastItem.getBoundingClientRect()
                    const containerRect = sectionRef.current
                        ? (sectionRef.current as HTMLElement).getBoundingClientRect()
                        : { top: 0 }
                    const relativeBottom = lastItemRect.bottom - containerRect.top
                    setLineHeight(relativeBottom)
                }
            }
        }

        // Actualizar después del renderizado inicial y en cada cambio de tamaño de ventana
        updateLineHeight()
        window.addEventListener("resize", updateLineHeight)

        return () => {
            window.removeEventListener("resize", updateLineHeight)
        }
    }, [isInView])

    return (
        <section className="py-20 dark:bg-white bg-black">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="mb-16 text-center text-3xl font-bold tracking-tighter sm:text-4xl dark:text-black text-white"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Formación Académica
                </motion.h2>

                <div ref={sectionRef} className="relative mx-auto max-w-4xl">
                    {/* Línea vertical - visible en todos los tamaños de pantalla */}
                    <div
                        className="absolute left-4 top-0 w-0.5 bg-zinc-700 md:left-1/2 md:-translate-x-1/2"
                        style={{ height: `${lineHeight}px` }}
                    />

                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            ref={(el: HTMLDivElement | null) => {
                                itemRefs.current[index] = el;
                            }}
                            className="relative mb-12 md:mb-24"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Punto - visible en todos los tamaños de pantalla */}
                            <div className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full bg-white md:left-1/2 md:h-5 md:w-5 md:-translate-x-1/2" />

                            {/* Contenido con estructura diferente para móvil vs desktop */}
                            <div className={`flex flex-row pl-12 md:pl-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                <div className="w-full rounded-lg bg-zinc-800 p-6 shadow-lg md:w-[calc(50%-2rem)]">
                                    <div className="mb-2 inline-block rounded bg-black px-3 py-1 text-sm font-semibold">{item.year}</div>
                                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                                    {item.institution && <p className="mb-2 text-sm text-zinc-400">{item.institution}</p>}
                                    <p className="text-zinc-300">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}