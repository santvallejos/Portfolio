import { BlurFade } from "../components/magicui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function AboutMe() {
    return (
        <section id="about-me" className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Bento Grid de imágenes (lado izquierdo) */}
                    <div className="w-full lg:w-1/2">
                        <div className="columns-2 gap-4 sm:columns-3">
                            {images.map((imageUrl, idx) => (
                                <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                                    <img
                                        className="mb-4 size-full rounded-lg object-contain"
                                        src={imageUrl}
                                        alt={`Random stock image ${idx + 1}`}
                                    />
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                    
                    {/* Información sobre mí (lado derecho) */}
                    <div className="w-full lg:w-1/2">
                        <BlurFade delay={0.3} inView>
                            <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
                            <div className="space-y-4">
                                <p className="text-lg">
                                    Mi nombre es Santiago Vallejos, tengo más de 2 años de experiencia como 
                                    <span className="text-blue-500 font-medium"> Full Stack Developer</span>, 
                                    me apasiona mucho la tecnología y el desarrollo de software.
                                </p>
                                <p className="text-lg">
                                    Actualmente estudio Licenciatura en Sistemas en la Universidad Nacional del Nordeste. 
                                    Participé en varios programas donde tuve la posibilidad de destacar algunos de 
                                    <span className="text-blue-500"> mis proyectos y trabajar en grupo</span>.
                                </p>
                                <p className="text-lg">
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