import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export interface ParallaxCardProps {
  title: string;
  category: string;
  imageSrc: string;
}

export const ParallaxCard: React.FC<ParallaxCardProps> = ({
  title,
  category,
  imageSrc,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 10;
    const y = (e.clientY - rect.top - rect.height / 2) / 10;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
    >
      <motion.div
        animate={{ x: -offset.x * 1.5, y: -offset.y * 1.5 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute -inset-8 bg-cover bg-center transition-transform group-hover:scale-105"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <motion.div
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="absolute bottom-6 left-6 right-6 z-10"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-white mt-1">{title}</h3>
      </motion.div>
    </div>
  );
};
