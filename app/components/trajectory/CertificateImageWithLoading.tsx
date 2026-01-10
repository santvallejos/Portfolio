import Image from "next/image";
import { useState } from "react";

export function CertificateImageWithLoading({ 
    src, 
    alt, 
    className 
}: { 
    src: string; 
    alt: string; 
    className?: string; 
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
        <div className="relative">
            {/* Skeleton loader */}
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 dark:from-zinc-200/50 dark:to-zinc-300/50 animate-pulse rounded-lg flex items-center justify-center min-h-[400px]">
                    <div className="w-8 h-8 border-2 border-zinc-400 dark:border-zinc-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 bg-zinc-800/50 dark:bg-zinc-200/50 flex items-center justify-center rounded-lg min-h-[400px]">
                    <div className="text-center text-zinc-400 dark:text-zinc-600">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className="text-sm">Error al cargar el certificado</p>
                    </div>
                </div>
            )}

            {/* Imagen */}
            <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={handleLoad}
                onError={handleError}
                priority
            />
        </div>
    );
}