import React from 'react';
import { motion } from 'framer-motion';

export interface WaveLoaderProps {
  color?: string;
  count?: number;
}

export const WaveLoader: React.FC<WaveLoaderProps> = ({ color = 'bg-indigo-500', count = 5 }) => {
  return (
    <div className="flex items-center gap-1.5 h-8">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className={`w-1.5 h-full rounded-full ${color}`}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
