"use client"

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import TechTag from "../ui/TechTag";
import { TagConfig } from "../../types/TagConfig";

interface CertificateGalleryProps {
    certificates: {
        id: string;
        imageUrl: string;
    }[];
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
                                    <img
                                        src={certificate.imageUrl}
                                        alt={`Certificado`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </DialogTrigger>

                            <DialogContent className="max-w-4xl w-full lg:w-auto bg-zinc-900 dark:bg-zinc-100 border-zinc-700 dark:border-zinc-300">
                                <DialogHeader>
                                    <DialogTitle className="text-white dark:text-black">Certificado</DialogTitle>
                                </DialogHeader>
                                {/* Certificate Image */}
                                <div className="flex justify-center py-6">
                                    <div className="relative max-w-full">
                                        <img src={certificate.imageUrl} alt="Certificado ampliado" />
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