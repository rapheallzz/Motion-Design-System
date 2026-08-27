import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
}

export interface ParticleButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
}

export const ParticleButton: React.FC<ParticleButtonProps> = ({ children, className = '', onClick, ...props }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      angle: (i * 30 * Math.PI) / 180,
      speed: Math.random() * 40 + 20,
    }));
    setParticles(newParticles);
    if (onClick) onClick(e);
  };

  return (
    <div className="relative inline-block">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: Math.cos(p.angle) * p.speed,
            y: Math.sin(p.angle) * p.speed,
            opacity: 0,
            scale: 0.2,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-amber-400 pointer-events-none"
        />
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`px-6 py-3 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
};
