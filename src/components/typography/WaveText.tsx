import React from 'react';
import { motion } from 'framer-motion';

export interface WaveTextProps {
  text: string;
  className?: string;
}

export const WaveText: React.FC<WaveTextProps> = ({ text, className = '' }) => {
  const letters = text.split('');

  return (
    <div className={`flex items-center overflow-hidden font-bold ${className}`}>
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: idx * 0.08,
            ease: 'easeInOut',
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  );
};
