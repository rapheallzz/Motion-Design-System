import React from 'react';
import { motion } from 'framer-motion';

export interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
}) => {
  const roundedClass =
    variant === 'circular' ? 'rounded-full' : variant === 'text' ? 'rounded-md' : 'rounded-xl';

  return (
    <div
      className={`relative overflow-hidden bg-slate-800 ${roundedClass} ${className}`}
      style={{ width: width ?? '100%', height: height ?? (variant === 'text' ? '1rem' : '100%') }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
