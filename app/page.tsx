"use client";

// Prueba de como se ve la cusriva con el fondo de particular
import { Playwrite_DE_SAS } from "next/font/google"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "./components/magicui/Particles";

const playfair_de_sas = Playwrite_DE_SAS({
  weight: "400"
});

  
export default function Home() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
        <p className={`${playfair_de_sas.className} antialiased`}>Santiago Vallejos</p>
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
