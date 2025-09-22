"use client"

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import TechTag from "./TechTag";
import { TagConfig } from "../../types/TagConfig";

interface CertificateCardProps {
  id: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  imageUrl: string;
  link?: string;
  technologies?: (string | TagConfig)[];
  credentialUrl?: string;
  index?: number;
}

export function CertificateCard({ 
  title, 
  institution, 
  date, 
  description, 
  imageUrl, 
  link, 
  technologies = [],
  credentialUrl,
  index = 0
}: CertificateCardProps) {
  return (
    <motion.div
      className="group relative bg-transparent border border-zinc-800/30 dark:border-zinc-200/30 hover:border-zinc-700 dark:hover:border-zinc-300 transition-all duration-500 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Subtle background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-900/5 dark:to-zinc-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Certificate preview - minimalist approach */}
      <div className="relative">
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative h-40 bg-zinc-900/20 dark:bg-zinc-100/20 cursor-pointer overflow-hidden group/image">
              <Image
                src={imageUrl}
                alt={`Certificado de ${title}`}
                fill
                className="object-cover opacity-60 group-hover/image:opacity-80 group-hover/image:scale-[1.02] transition-all duration-700"
              />
              
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Minimalist hover indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-full bg-black/95 dark:bg-white/95 border-zinc-800 dark:border-zinc-200 backdrop-blur-xl">
            <DialogHeader>
              <DialogTitle className="text-white dark:text-black text-xl font-light">
                {title}
              </DialogTitle>
              <p className="text-zinc-400 dark:text-zinc-600 text-sm">{institution}</p>
            </DialogHeader>
            <div className="flex justify-center p-4">
              <Image
                src={imageUrl}
                alt={`Certificado de ${title}`}
                width={900}
                height={700}
                className="max-w-full max-h-[75vh] object-contain rounded-md"
                priority
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Content section */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-light text-white dark:text-black leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-500 text-xs whitespace-nowrap">
              <Calendar size={12} />
              <span>{date}</span>
            </div>
          </div>
          
          <p className="text-sm text-zinc-400 dark:text-zinc-600 font-light">
            {institution}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-300 dark:text-zinc-700 leading-relaxed font-light line-clamp-2">
          {description}
        </p>

        {/* Technologies - Minimalist pills */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 3).map((tech, techIndex) => (
              <TechTag
                key={techIndex}
                tag={tech}
                size="sm"
                variant="minimal"
              />
            ))}
            {technologies.length > 3 && (
              <span className="text-xs text-zinc-500 dark:text-zinc-500 px-2 py-1 rounded-md bg-zinc-900/20 dark:bg-zinc-100/20">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action button - minimalist */}
        {(link || credentialUrl) && (
          <div className="pt-2">
            <button
              onClick={() => window.open(link || credentialUrl, '_blank')}
              className="group/btn flex items-center gap-2 text-zinc-400 hover:text-white dark:hover:text-black transition-colors duration-300 text-sm font-light"
            >
              <span>Ver credencial</span>
              <ExternalLink 
                size={14} 
                className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" 
              />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}