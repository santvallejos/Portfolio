"use client"

const itemsNav = [
    {
        title: "Inicio",
        link: "/",
        id: "home"
    },
    {
        title: "Sobre mí",
        link: "#about-me",
        id: "about"
    },
    {
        title: "Estudios",
        link: "#experience",
        id: "education"
    },
    {
        title: "Proyectos",
        link: "#projects",
        id: "projects"
    },
    {
        title: "Contacto",
        link: "#contact",
        id: "contact"
    }
];

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    // Evitar hidratación incorrecta esperando a que el componente se monte
    useEffect(() => {
        setMounted(true);
    }, []);

    // Efecto de scroll para cambiar la apariencia del header
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            className={`
                fixed top-0 left-0 right-0
                flex justify-between items-center
                px-4 md:px-8 lg:px-12
                py-4 md:py-6
                w-full
                z-50
                transition-all duration-300 ease-in-out
                ${scrolled 
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20' 
                    : 'bg-transparent'
                }
            `}
        >
            {/* Logo/Brand */}
            <div className="flex items-center">
                <Link 
                    href="/" 
                    className="text-xl md:text-2xl font-bold text-black dark:text-white transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                >
                    SV
                </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-1">
                {itemsNav.map((item) => (
                    <Link
                        key={item.id}
                        href={item.link}
                        className={`
                            relative px-4 py-2 text-sm font-medium
                            text-gray-700 dark:text-gray-300
                            hover:text-black dark:hover:text-white
                            transition-all duration-200
                            rounded-full
                            hover:bg-gray-100 dark:hover:bg-gray-800/50
                            group
                        `}
                    >
                        {item.title}
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black dark:bg-white transition-all duration-200 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
                    </Link>
                ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
                {/* Theme Toggle */}
                {mounted && (
                    <button
                        onClick={toggleTheme}
                        className={`
                            p-2 rounded-full
                            text-gray-700 dark:text-gray-300
                            hover:text-black dark:hover:text-white
                            hover:bg-gray-100 dark:hover:bg-gray-800/50
                            transition-all duration-200
                            pointer-events-auto
                        `}
                        aria-label={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                )}

                {/* Mobile Menu Button */}
                <button 
                    className={`
                        md:hidden p-2 rounded-full
                        text-gray-700 dark:text-gray-300
                        hover:text-black dark:hover:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-800/50
                        transition-all duration-200
                    `}
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 mx-4 md:hidden">
                    <div className={`
                        bg-white/95 dark:bg-black/95 
                        backdrop-blur-xl 
                        rounded-2xl 
                        border border-gray-200/20 dark:border-gray-800/20
                        shadow-lg
                        py-4
                        z-50
                    `}>
                        {itemsNav.map((item) => (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`
                                    block px-6 py-3 
                                    text-gray-700 dark:text-gray-300
                                    hover:text-black dark:hover:text-white
                                    hover:bg-gray-100 dark:hover:bg-gray-800/50
                                    transition-all duration-200
                                    font-medium
                                `}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;