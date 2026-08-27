import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AnimatedCounterBadgeProps {
  count: number;
}

export const AnimatedCounterBadge: React.FC<AnimatedCounterBadgeProps> = ({ count }) => {
  return (
    <div className="relative inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold overflow-hidden shadow-md">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={count}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {count}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
