import { BlurFade } from "../components/magicui/blur-fade";

// Definir las rutas de los medios (imágenes y video)
const media = [
    { type: "image", url: "/contentAboutMe/8.jpeg" },
    { type: "image", url: "/contentAboutMe/6.jpeg" },
    { type: "image", url: "/contentAboutMe/1.jpg" },
    { type: "video", url: "/contentAboutMe/4.mp4" },
    { type: "image", url: "/contentAboutMe/7.jpeg" },
    { type: "image", url: "/contentAboutMe/3.jpg" },
    { type: "image", url: "/contentAboutMe/5.jpeg" },
    { type: "image", url: "/contentAboutMe/2.jpg" },
];

export default function AboutMe() {
    return (
        <section id="about-me" className="py-16 bg-black dark:bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Bento Grid de imágenes y video (lado izquierdo) */}
                    <div className="w-full lg:w-1/2">
                        <div className="columns-2 gap-4 sm:columns-3">
                            {media.map((item, idx) => (
                                <BlurFade key={item.url} delay={0.25 + idx * 0.05} inView>
                                    {item.type === "image" ? (
                                        <img
                                            className="mb-4 size-full rounded-lg object-cover"
                                            src={item.url}
                                            alt={`Imagen ${idx + 1}`}
                                        />
                                    ) : (
                                        <video
                                            className="mb-4 size-full rounded-lg object-cover"
                                            src={item.url}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            controls={false}
                                        />
                                    )}
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                    
                    {/* Información sobre mí (lado derecho) */}
                    <div className="w-full lg:w-1/2">
                        <BlurFade delay={0.3} inView>
                            <h2 className="text-5xl font-bold mb-6 text-white dark:text-black text-end">Sobre mí</h2>
                            <div className="space-y-4">
                                <p className="text-xl text-white dark:text-black text-end">
                                    Mi nombre es Santiago Vallejos, tengo más de 2 años de experiencia como 
                                    <span className="text-blue-500 font-medium"> Full Stack Developer</span>, 
                                    me apasiona mucho la tecnología y el desarrollo de software.
                                </p>
                                <p className="text-xl text-white dark:text-black text-end">
                                    Actualmente estudio Licenciatura en Sistemas en la Universidad Nacional del Nordeste. 
                                    Participé en varios programas donde tuve la posibilidad de destacar algunos de 
                                    <span className="text-blue-500"> mis proyectos y trabajar en grupo</span>.
                                </p>
                                <p className="text-xl text-white dark:text-black text-end">
                                    <span className="text-blue-500">Mi objetivo</span> es mejorar continuamente en el ámbito 
                                    del desarrollo de software, aplicar mis conocimientos a proyectos reales y contribuir a su éxito.
                                </p>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}