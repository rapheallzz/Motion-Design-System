import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface MorphingContainerProps {
  childrenCollapsed: React.ReactNode;
  childrenExpanded: React.ReactNode;
}

export const MorphingContainer: React.FC<MorphingContainerProps> = ({
  childrenCollapsed,
  childrenExpanded,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`cursor-pointer overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 shadow-2xl ${
        isExpanded ? 'w-96 min-h-[300px]' : 'w-48 h-20'
      }`}
    >
      <motion.div layout>
        {isExpanded ? childrenExpanded : childrenCollapsed}
      </motion.div>
    </motion.div>
  );
};
