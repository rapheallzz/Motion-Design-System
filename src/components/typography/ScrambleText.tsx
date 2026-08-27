import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface ScrambleTextProps {
  text: string;
  className?: string;
}

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);

  const handleHover = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <motion.span
      onMouseEnter={handleHover}
      className={`font-mono cursor-pointer text-sky-400 font-semibold ${className}`}
    >
      {displayText}
    </motion.span>
  );
};
