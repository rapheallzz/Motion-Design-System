import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface PulseButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  pulseColor?: string;
}

export const PulseButton: React.FC<PulseButtonProps> = ({
  children,
  pulseColor = 'rgba(56, 189, 248, 0.4)',
  className = '',
  ...props
}) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <motion.span
        className="absolute inset-0 rounded-xl"
        animate={{
          scale: [1, 1.25, 1.4],
          opacity: [0.7, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
        style={{ backgroundColor: pulseColor }}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 px-6 py-3 rounded-xl font-semibold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/30 ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
};
