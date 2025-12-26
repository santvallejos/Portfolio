"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

//Magic UI
import { Dock, DockIcon } from "../magicui/dock";
import { label } from "framer-motion/client";
export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
    gitHub: (props: IconProps) => (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
    ),
    linkdInd: (props: IconProps) => (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
    ),
    email: (props: IconProps) => (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
    ),
    cv: (props: IconProps) => (
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
    ),
};

// Social Icons to mappear
const SocialIcons = [
    {
        name: "GitHub",
        link: "https://github.com/santvallejos",
        label: "GitHub",
        icon: Icons.gitHub
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/santiago-maximiliano-vallejos/",
        label: "LinkedIn",
        icon: Icons.linkdInd
    },
    {
        name: "Email",
        link: "mailto:vallejossantiago1412@gmail.com",
        label: "Email",
        icon: Icons.email
    },
    {
        name: "Download CV",
        link: "/CV Santiago Maximiliano Vallejos - Software Developer 2025.pdf",
        label: "Download CV",
        dowload: true,
        icon: Icons.cv
    }
];

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <ParticleCanvas className="absolute inset-0 h-full w-full" /> {/* Background particles */}

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                {/* Title */}
                <motion.h1
                    className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl text-black dark:text-white great-vibes-regular"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Santiago Vallejos
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="max-w-[600px] text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Full Stack Developer
                </motion.p>

                {/* Social Icons Dock */}
                <motion.div
                    className="max-w-[600px] text-lg text-gray-600 dark:text-gray-400 sm:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Dock direction="middle">
                        {SocialIcons.map((icon) => (
                            <DockIcon key={icon.name}>
                                <a href={icon.link} target="_blank" rel="noopener noreferrer" aria-label={icon.label} download={icon.dowload ? true : false}>
                                    <icon.icon />
                                </a>
                            </DockIcon>
                        ))}
                    </Dock>
                </motion.div>
            </div>
        </div>
    );
}
