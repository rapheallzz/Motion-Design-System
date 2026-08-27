import React from 'react';
import { motion } from 'framer-motion';

export interface SuccessCheckmarkProps {
  size?: number;
}

export const SuccessCheckmark: React.FC<SuccessCheckmarkProps> = ({ size = 64 }) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <motion.svg
        viewBox="0 0 50 50"
        className="w-full h-full text-emerald-500"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
          }}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 25 L22 32 L35 17"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.4, ease: 'easeOut' } },
          }}
        />
      </motion.svg>
    </div>
  );
};
