// Utils for handling YouTube URLs and thumbnails
export const getYouTubeVideoId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

export const getYouTubeThumbnail = (url: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'maxres'): string => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return '';
    
    const qualityMap = {
        'default': 'default',
        'medium': 'mqdefault', 
        'high': 'hqdefault',
        'standard': 'sddefault',
        'maxres': 'maxresdefault'
    };

    return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
};

// Preload an image
export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
    });
};
