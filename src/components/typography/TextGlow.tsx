import React from 'react';
import { motion } from 'framer-motion';

export interface TextGlowProps {
  text: string;
  glowColor?: string;
  className?: string;
}

export const TextGlow: React.FC<TextGlowProps> = ({
  text,
  glowColor = 'rgba(56, 189, 248, 0.8)',
  className = '',
}) => {
  return (
    <motion.span
      animate={{
        textShadow: [
          `0 0 4px ${glowColor}`,
          `0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
          `0 0 4px ${glowColor}`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 ${className}`}
    >
      {text}
    </motion.span>
  );
};
