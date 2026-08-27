import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ExpandableCardProps {
  title: string;
  shortText: string;
  fullText: React.ReactNode;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  shortText,
  fullText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl overflow-hidden"
    >
      <motion.h3 layout="position" className="text-xl font-bold text-white">
        {title}
      </motion.h3>
      <motion.p layout="position" className="text-slate-400 text-sm mt-2">
        {shortText}
      </motion.p>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-slate-800 text-slate-300 text-sm"
          >
            {fullText}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        layout="position"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-xs font-semibold text-sky-400 hover:text-sky-300 focus:outline-none"
      >
        {isExpanded ? 'Show less' : 'Read more →'}
      </motion.button>
    </motion.div>
  );
};
