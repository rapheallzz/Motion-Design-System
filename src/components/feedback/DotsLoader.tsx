import React from 'react';
import { motion } from 'framer-motion';

export interface DotsLoaderProps {
  color?: string;
  size?: number;
}

export const DotsLoader: React.FC<DotsLoaderProps> = ({ color = 'bg-cyan-400', size = 12 }) => {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className={`rounded-full ${color}`}
          style={{ width: size, height: size }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
