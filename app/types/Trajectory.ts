import { TagConfig } from "./TagConfig";

export type TimelineItem = {
    year: string;
    title: string;
    company?: string;
    institution?: string;
    description: string;
    technologies?: (string | TagConfig)[];
    type: 'work' | 'education';
    certificateUrl?: string;
    projectUrl?: string;
    actionLabel?: string;
};

export type Certificate = {
    id: string;
    imageUrl: string;
};