import React from 'react';
import { motion } from 'framer-motion';

export interface PulseDotProps {
  color?: string;
  size?: number;
}

export const PulseDot: React.FC<PulseDotProps> = ({ color = 'bg-emerald-500', size = 12 }) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <motion.span
        animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        className={`absolute rounded-full ${color}`}
        style={{ width: size, height: size }}
      />
      <span className={`relative rounded-full ${color}`} style={{ width: size, height: size }} />
    </div>
  );
};
