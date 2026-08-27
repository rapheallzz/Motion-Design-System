import React from 'react';
import { motion } from 'framer-motion';

export interface FadeInTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const FadeInText: React.FC<FadeInTextProps> = ({ text, delay = 0, className = '' }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
};
