import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface ParticleCanvasProps {
  className?: string;
}

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvas.width) this.x = 0;
    if (this.x < 0) this.x = this.canvas.width;
    if (this.y > this.canvas.height) this.y = 0;
    if (this.y < 0) this.y = this.canvas.height;
  }

  draw(ctx: CanvasRenderingContext2D, theme: string) {
    const particleColor = theme === 'dark' 
      ? "rgba(255, 255, 255, 0.5)" 
      : "rgba(0, 0, 0, 0.5)";
    
    ctx.fillStyle = particleColor;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleCanvas({ className = "" }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme, theme } = useTheme();
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [isClient, setIsClient] = React.useState(false);

  // Asegurar que estamos del lado cliente
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Solo ejecutar si estamos en el cliente
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Función para redimensionar el canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinicializar partículas con nuevas dimensiones
      particlesRef.current = [];
      for (let i = 0; i < 200; i++) {
        particlesRef.current.push(new Particle(canvas));
      }
    };

    // Función de animación
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Determinar tema actual con múltiples fallbacks
      const currentTheme = resolvedTheme || theme || 'light';

      for (const particle of particlesRef.current) {
        particle.update();
        particle.draw(ctx, currentTheme);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Manejar redimensionamiento
    const handleResize = () => {
      resizeCanvas();
    };

    // Inicializar después de un breve retraso para asegurar hidratación
    const initTimer = setTimeout(() => {
      resizeCanvas();
      animate();
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(initTimer);
    };
  }, [resolvedTheme, theme, isClient]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  );
}