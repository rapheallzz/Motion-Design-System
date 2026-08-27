import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface MultiSelectTagsProps {
  options: string[];
  defaultSelected?: string[];
  onChange?: (tags: string[]) => void;
}

export const MultiSelectTags: React.FC<MultiSelectTagsProps> = ({
  options,
  defaultSelected = [],
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const toggleTag = (tag: string) => {
    const next = selected.includes(tag) ? selected.filter((t) => t !== tag) : [...selected, tag];
    setSelected(next);
    if (onChange) onChange(next);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((tag) => {
        const isSelected = selected.includes(tag);
        return (
          <motion.button
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
              isSelected
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-500/20'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span>{tag}</span>
            <AnimatePresence>
              {isSelected && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  ✕
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
};
