import React from 'react';
import { motion } from 'framer-motion';

export interface ShimmerCardProps {
  children?: React.ReactNode;
  className?: string;
}

export const ShimmerCard: React.FC<ShimmerCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-800/80 border border-slate-700/60 p-6 ${className}`}>
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        animate={{ translateX: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: 'easeInOut',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
