import React from 'react';
import { motion } from 'framer-motion';

export interface FloatingElementProps {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  duration = 3,
  distance = 12,
}) => {
  return (
    <motion.div
      animate={{ y: [-distance / 2, distance / 2, -distance / 2] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};
