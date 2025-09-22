"use client"

import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface CertificateGalleryProps {
    certificates: {
        id: string;
        imageUrl: string;
    }[];
}

// Componente para manejar el estado de carga de cada imagen
function CertificateImage({ 
    imageUrl, 
    alt, 
    className,
    isModal = false 
}: { 
    imageUrl: string; 
    alt: string; 
    className?: string;
    isModal?: boolean;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className="relative w-full h-full">
            {/* Skeleton loader */}
            {isLoading && (
                <div className={`absolute inset-0 ${isModal ? 'rounded-lg' : ''} bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 dark:from-zinc-200/50 dark:to-zinc-300/50 animate-pulse`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-zinc-400 dark:border-zinc-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 bg-zinc-800/50 dark:bg-zinc-200/50 flex items-center justify-center rounded-lg">
                    <div className="text-center text-zinc-400 dark:text-zinc-600">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className="text-sm">Error al cargar</p>
                    </div>
                </div>
            )}

            {/* Imagen */}
            <Image
                src={imageUrl}
                alt={alt}
                fill={!isModal}
                width={isModal ? 800 : undefined}
                height={isModal ? 600 : undefined}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={handleLoad}
                onError={handleError}
                priority
                sizes={isModal ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            />
        </div>
    );
}

export function CertificateGallery({ certificates }: CertificateGalleryProps) {
    return (
        <div className="space-y-12">
            {/* Gallery Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {certificates.map((certificate, index) => (
                    <motion.div
                        key={certificate.id}
                        className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900/20 dark:bg-zinc-100/20 cursor-pointer border border-transparent hover:border-zinc-700/50 dark:hover:border-zinc-300/50 object-cover transition-all duration-50 group-hover:scale-110"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ 
                            y: -8,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    >
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative w-full h-full border border-transparent">
                                    {/* Certificate Image */}
                                    <CertificateImage
                                        imageUrl={certificate.imageUrl}
                                        alt="Certificado"
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </DialogTrigger>

                            <DialogContent className="max-w-4xl w-full lg:w-auto bg-zinc-900 dark:bg-zinc-100 border-zinc-700 dark:border-zinc-300">
                                <DialogHeader>
                                    <DialogTitle className="text-white dark:text-black">Certificado</DialogTitle>
                                </DialogHeader>
                                {/* Certificate Image */}
                                <div className="flex justify-center py-6">
                                    <div className="relative max-w-full max-h-[70vh]">
                                        <CertificateImage
                                            imageUrl={certificate.imageUrl}
                                            alt="Certificado ampliado"
                                            className="max-w-full max-h-[70vh] object-contain rounded-lg"
                                            isModal={true}
                                        />
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}