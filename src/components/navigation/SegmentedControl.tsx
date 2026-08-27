import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface SegmentedControlProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleSelect = (val: string) => {
    setSelected(val);
    if (onChange) onChange(val);
  };

  return (
    <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl relative">
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`relative px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors z-10 ${
              isSelected ? 'text-slate-950' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId="segmented-highlight"
                className="absolute inset-0 bg-cyan-400 rounded-lg shadow"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        );
      })}
    </div>
  );
};
