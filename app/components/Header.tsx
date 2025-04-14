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

/* // Obtén todos los elementos <a> en el encabezado
const $navAElements = [...document.querySelectorAll('header nav a')];

// Agrega un evento de desplazamiento al documento
window.addEventListener('scroll', () => {
    let activeFound = false;

    $navAElements.forEach(a => {
        const selectionForSection = a.getAttribute('href')?.substring(1);
        const sectionElement = document.querySelector(selectionForSection || '');

        if (!sectionElement) return;

        // Calcula el rango visible para la sección
        const sectionTop = (sectionElement as HTMLElement).offsetTop - 150;
        const sectionBottom = sectionTop + (sectionElement as HTMLElement).offsetHeight;

        // Verifica si el scroll actual está dentro de esta sección
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom && !activeFound) {
            $navAElements.forEach(aToRemove => aToRemove.classList.remove('bg-white/15'));
            a.classList.add('bg-white/15');
            activeFound = true; // Marca como encontrado para evitar conflictos
        }
    });

    // Si no se encuentra ninguna sección activa (por ejemplo, al estar por encima de todas),
    // elimina cualquier clase activa de los elementos de navegación
    if (!activeFound) {
        $navAElements.forEach(aToRemove => aToRemove.classList.remove('bg-white/15'));
    }
}); */

function Header (){
    return (
        <header
            className={`
            flex justify-center items-center
            mx-auto
            py-5
            sticky top-0
            w-full xl:w-[1120px]
            z-10
            `}
            >
            <nav
            className={`
                border border-black rounded-full
                px-3 py-1
                flex flex-row items-center lg:gap-12
                bg-black/50
                backdrop-blur-2xl
            `}
            >
                {/* Necesito recorrer los itemsNav  en una etiqueta a*/}
                {itemsNav.map((item, index) => (
                    <a
                    className="text-white hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
                    href="{item.link}" 
                    key={index}>
                        {item.title}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Header;