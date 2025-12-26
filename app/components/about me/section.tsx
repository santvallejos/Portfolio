import { BlurFade } from "../magicui/blur-fade";

// Media assets for the About Me section
const media = [
    { type: "image", url: "/aboutme/1.jpg" },
    { type: "image", url: "/aboutme/2.jpg" },
    { type: "image", url: "/aboutme/3.jpg" },
    { type: "image", url: "/aboutme/5.jpg" },
    { type: "image", url: "/aboutme/12.jpg" },
    { type: "image", url: "/aboutme/6.jpg" },
    { type: "image", url: "/aboutme/7.jpg" },
    { type: "image", url: "/aboutme/8.jpg" },
    { type: "image", url: "/aboutme/11.jpg" },
    { type: "video", url: "/aboutme/4.mp4" },
    { type: "image", url: "/aboutme/9.jpg" },
    { type: "image", url: "/aboutme/10.jpg" },
];

export default function AboutMe() {
    return (
        <section id="about-me" className="py-16 bg-black dark:bg-white">

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Bento grid of photos and video (Left) */}
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

                    {/* About me information (Right) */}
                    <div className="w-full lg:w-1/2">
                        <BlurFade delay={0.3} inView>
                            <h2 className="text-5xl font-bold mb-6 text-white dark:text-black text-end">Sobre mí</h2>
                            <div className="space-y-4">
                                <p className="text-xl lg:text-2xl text-white dark:text-black text-end">
                                    Soy <span className="text-blue-500 font-medium">Santiago Vallejos</span>,
                                    un apasionado del mundo de la tecnología y el desarrollo de software.
                                </p>
                                <p className="text-xl lg:text-2xl text-white dark:text-black text-end">
                                    Disfruto mucho aprender cosas nuevas, trabajar en equipo y transformar ideas
                                    en proyectos que generen un impacto real. Actualmente estudio
                                    <span className="text-blue-500"> Licenciatura en Sistemas</span> en la
                                    Universidad Nacional del Nordeste.
                                </p>
                                <p className="text-xl lg:text-2xl text-white dark:text-black text-end">
                                    <span className="text-blue-500">Mi objetivo</span> es seguir creciendo como
                                    profesional y persona, compartiendo mis conocimientos, enfrentando nuevos retos
                                    y creando soluciones que aporten valor.
                                </p>


                                {/* GitHub Contributions Chart */}
                                <div className="flex justify-end mt-8">
                                    <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-black/20">
                                        <img
                                            src="https://ghchart.rshah.org/409ba5/santvallejos"
                                            alt="GitHub chart de contribuciones"
                                            className="rounded-md w-full h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
}