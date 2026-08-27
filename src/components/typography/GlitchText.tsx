import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <div
      className="relative inline-block cursor-pointer font-bold select-none"
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <span className={`relative z-10 text-white ${className}`}>{text}</span>
      {isGlitching && (
        <>
          <motion.span
            animate={{ x: [-2, 2, -1, 3, 0], y: [1, -1, 2, 0] }}
            transition={{ repeat: Infinity, duration: 0.2 }}
            className={`absolute inset-0 text-cyan-400 opacity-80 ${className}`}
            style={{ clipPath: 'inset(10% 0 30% 0)' }}
          >
            {text}
          </motion.span>
          <motion.span
            animate={{ x: [2, -2, 1, -3, 0], y: [-1, 1, -2, 0] }}
            transition={{ repeat: Infinity, duration: 0.25 }}
            className={`absolute inset-0 text-rose-500 opacity-80 ${className}`}
            style={{ clipPath: 'inset(50% 0 10% 0)' }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
};
