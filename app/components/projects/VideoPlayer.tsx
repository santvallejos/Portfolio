"use client"

import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getYouTubeVideoId, getYouTubeThumbnail } from "./utils";

interface VideoPlayerProps {
    src: string;
    title: string;
}

const VideoPlayer = memo(({ src, title }: VideoPlayerProps) => {
    const [showVideo, setShowVideo] = useState(false);
    const [thumbnailError, setThumbnailError] = useState(false);
    const videoId = getYouTubeVideoId(src);

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
    };

    const handleThumbnailError = () => {
        setThumbnailError(true);
    };

    if (showVideo && videoId) {
        return (
            <div className="relative w-full h-full bg-black">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                <motion.button
                    onClick={handleCloseVideo}
                    className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors duration-200 z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </motion.button>
            </div>
        );
    }

    // URLs de thumbnail con fallbacks automáticos
    const getThumbnailUrl = () => {
        if (!videoId) return '';
        if (thumbnailError) {
            return getYouTubeThumbnail(src, 'high');
        }
        return getYouTubeThumbnail(src, 'maxres');
    };

    return (
        <motion.div 
            className="relative w-full h-full group/video cursor-pointer overflow-hidden rounded bg-gray-100 dark:bg-gray-800"
            onClick={handleVideoClick}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            {/* Thumbnail del video usando Next.js Image optimizado */}
            {videoId && (
                <Image
                    src={getThumbnailUrl()}
                    alt={`Miniatura del video: ${title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    onError={handleThumbnailError}
                />
            )}
            
            {/* Overlay y botón de play */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/video:bg-black/30 transition-all duration-300">
                <motion.div 
                    className="bg-red-600 hover:bg-red-700 rounded-full p-4 shadow-2xl"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </motion.div>
            </div>

            {/* Indicador de video */}
            <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                VIDEO
            </div>
        </motion.div>
    );
});

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
