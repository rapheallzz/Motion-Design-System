import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per char
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        className="inline-block w-2 h-5 bg-cyan-400 ml-1"
      />
    </span>
  );
};
