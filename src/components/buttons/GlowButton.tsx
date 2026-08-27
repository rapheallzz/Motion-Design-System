import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface GlowButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  glowColor?: string;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  glowColor = 'from-pink-500 via-purple-500 to-indigo-500',
  className = '',
  ...props
}) => {
  return (
    <div className="relative group inline-block">
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${glowColor} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt`}
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className={`relative px-6 py-3 bg-slate-900 rounded-xl leading-none flex items-center gap-2 text-slate-100 border border-slate-800 ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
};
