import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ShinyButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 text-white shadow-lg ${className}`}
      {...props}
    >
      <motion.div
        className="absolute inset-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        initial={{ x: '-150%' }}
        animate={{ x: '250%' }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: 'easeInOut',
          repeatDelay: 1,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
