import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupAnimatedProps {
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const RadioGroupAnimated: React.FC<RadioGroupAnimatedProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleSelect = (val: string) => {
    setSelected(val);
    if (onChange) onChange(val);
  };

  return (
    <div className="space-y-2">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <label
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className="flex items-center gap-3 cursor-pointer p-2.5 rounded-xl hover:bg-slate-800/50 transition-colors select-none"
          >
            <div className="relative w-5 h-5 rounded-full border-2 border-slate-700 flex items-center justify-center">
              {isSelected && (
                <motion.div
                  layoutId="radio-indicator"
                  className="w-2.5 h-2.5 rounded-full bg-cyan-400"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </div>
            <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-slate-400'}`}>
              {opt.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};
