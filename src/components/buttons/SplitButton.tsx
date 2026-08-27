import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface SplitButtonProps {
  primaryLabel: string;
  onPrimaryClick: () => void;
  options: { label: string; onClick: () => void }[];
}

export const SplitButton: React.FC<SplitButtonProps> = ({
  primaryLabel,
  onPrimaryClick,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-flex items-center rounded-xl bg-emerald-600 p-0.5 shadow-md shadow-emerald-600/20">
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onPrimaryClick}
        className="px-4 py-2 text-white font-medium hover:bg-emerald-500/50 rounded-l-lg transition-colors"
      >
        {primaryLabel}
      </motion.button>
      <div className="w-px h-6 bg-emerald-700/60" />
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 py-2 text-white hover:bg-emerald-500/50 rounded-r-lg transition-colors"
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-slate-800 border border-slate-700 shadow-xl overflow-hidden z-20"
          >
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  opt.onClick();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-slate-700 hover:text-emerald-400 transition-colors"
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
