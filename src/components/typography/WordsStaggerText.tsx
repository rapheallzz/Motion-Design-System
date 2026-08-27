import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface WordsStaggerTextProps {
  text: string;
  staggerDelay?: number;
  className?: string;
}

export const WordsStaggerText: React.FC<WordsStaggerTextProps> = ({
  text,
  staggerDelay = 0.08,
  className = '',
}) => {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.04 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap gap-x-2 ${className}`}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
