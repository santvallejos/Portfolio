import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    mediaSrc,
    altText = "Tilted card media",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    mediaHeight = "300px",
    mediaWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);
    const [mediaType, setMediaType] = useState("image");

    // Determinar si el contenido es una imagen o un video basado en la extensión o URL
    useEffect(() => {
        if (typeof mediaSrc === "string") {
            const isVideo = 
                mediaSrc.match(/\.(mp4|webm|ogg)$/) || 
                mediaSrc.includes("youtube.com") || 
                mediaSrc.includes("youtu.be") || 
                mediaSrc.includes("vimeo.com");
            
            setMediaType(isVideo ? "video" : "image");
        }
    }, [mediaSrc]);

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    // Función para renderizar el contenido multimedia adecuado
    const renderMedia = () => {
        if (mediaType === "video") {
            // Verificar si es un enlace de YouTube o Vimeo
            if (typeof mediaSrc === "string" && (mediaSrc.includes("youtube.com") || mediaSrc.includes("youtu.be"))) {
                // Extraer el ID del video de YouTube
                let videoId = "";
                if (mediaSrc.includes("youtube.com/watch?v=")) {
                    videoId = mediaSrc.split("v=")[1].split("&")[0];
                } else if (mediaSrc.includes("youtu.be/")) {
                    videoId = mediaSrc.split("youtu.be/")[1];
                }
                
                return (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        className="absolute top-0 left-0 w-full h-full rounded-[15px] will-change-transform [transform:translateZ(0)]"
                        style={{
                            width: mediaWidth,
                            height: mediaHeight,
                        }}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={altText}
                    />
                );
            } else if (typeof mediaSrc === "string" && mediaSrc.includes("vimeo.com")) {
                // Extraer el ID del video de Vimeo
                const vimeoId = mediaSrc.split("vimeo.com/")[1];
                
                return (
                    <iframe
                        src={`https://player.vimeo.com/video/${vimeoId}`}
                        className="absolute top-0 left-0 w-full h-full rounded-[15px] will-change-transform [transform:translateZ(0)]"
                        style={{
                            width: mediaWidth,
                            height: mediaHeight,
                        }}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={altText}
                    />
                );
            } else {
                // Video local
                return (
                    <video
                        src={mediaSrc}
                        className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
                        style={{
                            width: mediaWidth,
                            height: mediaHeight,
                        }}
                        controls
                        loop
                        muted
                        playsInline
                    />
                );
            }
        } else {
            // Imagen
            return (
                <motion.img
                    src={mediaSrc}
                    alt={altText}
                    className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
                    style={{
                        width: mediaWidth,
                        height: mediaHeight,
                    }}
                />
            );
        }
    };

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="absolute top-4 text-center text-sm block sm:hidden">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="relative [transform-style:preserve-3d]"
                style={{
                    width: mediaWidth,
                    height: mediaHeight,
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                {renderMedia()}

                {displayOverlayContent && overlayContent && (
                    <motion.div
                        className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]"
                    >
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
