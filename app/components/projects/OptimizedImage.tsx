"use client"

import React, { useState, memo } from "react";
import Image from "next/image";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    priority?: boolean;
}

const OptimizedImage = memo(({ 
    src, 
    alt, 
    className = "", 
    fill = false,
    priority = false 
}: OptimizedImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const isExternal = src.startsWith('http') || src.startsWith('//');
    
    const handleLoad = () => setIsLoading(false);
    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    if (hasError) {
        return (
            <div className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center w-full h-full ${className}`}>
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        );
    }
    
    if (isExternal) {
        return (
            <div className="relative w-full h-full">
                {isLoading && (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
                )}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={src}
                    alt={alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                        isLoading ? 'opacity-0' : 'opacity-100'
                    } ${className}`}
                    onLoad={handleLoad}
                    onError={handleError}
                    loading={priority ? 'eager' : 'lazy'}
                />
            </div>
        );
    }
    
    return (
        <div className="relative w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
            )}
            <Image 
                src={src}
                alt={alt}
                fill={fill}
                priority={priority}
                className={`object-cover transition-opacity duration-500 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                } ${className}`}
                onLoad={handleLoad}
                onError={handleError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
