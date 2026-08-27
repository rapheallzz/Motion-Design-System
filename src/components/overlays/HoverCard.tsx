import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface HoverCardProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div>{trigger}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 bottom-full mb-2 z-40 p-4 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
