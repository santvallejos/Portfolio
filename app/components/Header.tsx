"use client"

const itemsNav = [
    {
        title: "Inicio",
        link: "/"
    },
    {
        title: "Sobre mí",
        link: "/sobre-mi"
    },
    {
        title: "Estudios",
        link: "/estudios"
    },
    {
        title: "Proyectos",
        link: "/proyectos"
    },
    {
        title: "Contacto",
        link: "/contacto"
    }
];

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    // Evitar hidratación incorrecta esperando a que el componente se monte
    useEffect(() => {
        setMounted(true);
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
            flex justify-center items-center
            mx-auto
            py-5
            w-full
            z-50
            `}
        >
            <nav
                className={`
                border border-black rounded-full
                px-3 py-1
                flex flex-row items-center
                bg-black/50
                backdrop-blur-2xl
                max-w-fit
                `}
            >
                <div className="flex items-center">
                    {/* Botón de menú hamburguesa para móviles */}
                    <button 
                        className="md:hidden text-white p-2" 
                        onClick={toggleMenu}
                        aria-label="Menú"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Menú para pantallas medianas y grandes */}
                    <div className="hidden md:flex md:flex-row md:items-center md:gap-4 lg:gap-12">
                        {itemsNav.map((item, index) => (
                            <a
                                className="text-white hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                                href={item.link}
                                key={index}
                            >
                                {item.title}
                            </a>
                        ))}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="text-white p-2 rounded-full hover:bg-white/10 transition pointer-events-auto"
                                aria-label={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                            >
                                {theme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>
                </div>

                {/* Menú desplegable para móviles */}
                {menuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-lg shadow-lg py-2 md:hidden z-50">
                        {itemsNav.map((item, index) => (
                            <a
                                className="block px-4 py-2 text-white hover:bg-white/10 transition pointer-events-auto"
                                href={item.link}
                                key={index}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="text-white p-2 rounded-full hover:bg-white/10 transition pointer-events-auto"
                                aria-label={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                            >
                                {theme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;