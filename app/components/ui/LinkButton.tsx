import React from "react";

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    children,
    className = "",
    target = "_blank",
    rel = "noopener noreferrer",
}) => {
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className={`bg-white/5
        border border-zinc-950 dark:border-white
        rounded-full
        inline-flex justify-center items-center gap-x-2
        py-1 px-2 md:py-2 md:px-4
        text-xs md:text-base
        transition
        hover:scale-110 hover:bg-white/10
        ${className}`}
        >
            {children}
        </a>
    );
};

export default LinkButton;
