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

import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header
            className={`
            flex pl-2 lg:justify-center items-center
            mx-auto
            py-5
            sticky top-0
            w-full xl:w-[1120px]
            z-50
            pointer-events-auto
            `}
        >
            <nav
                className={`
                border border-black rounded-full
                px-3 py-1
                flex flex-row items-center lg:gap-12
                bg-black/50
                backdrop-blur-2xl
                relative
                pointer-events-auto
            `}
            >
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
                            className="text-white hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base pointer-events-auto"
                            href={item.link}
                            key={index}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>

                {/* Menú desplegable para móviles */}
                {menuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-lg shadow-lg py-2 md:hidden z-50 pointer-events-auto">
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
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;