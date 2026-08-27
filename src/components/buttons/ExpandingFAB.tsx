import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FABAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export interface ExpandingFABProps {
  icon?: React.ReactNode;
  actions: FABAction[];
}

export const ExpandingFAB: React.FC<ExpandingFABProps> = ({
  icon = '+',
  actions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 right-0 flex flex-col gap-2 items-end mb-2"
          >
            {actions.map((action, idx) => (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  action.onClick();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 shadow-md text-sm whitespace-nowrap"
              >
                <span>{action.label}</span>
                <span className="w-5 h-5 flex items-center justify-center">{action.icon}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        animate={{ rotate: isOpen ? 45 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-xl shadow-cyan-500/30"
      >
        {icon}
      </motion.button>
    </div>
  );
};
