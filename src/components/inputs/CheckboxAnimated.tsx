import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface CheckboxAnimatedProps {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CheckboxAnimated: React.FC<CheckboxAnimatedProps> = ({
  label,
  checked: controlledChecked,
  onChange,
}) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleToggle = () => {
    const next = !isChecked;
    if (controlledChecked === undefined) setInternalChecked(next);
    if (onChange) onChange(next);
  };

  return (
    <label className="inline-flex items-center gap-3 cursor-pointer select-none">
      <motion.div
        whileTap={{ scale: 0.85 }}
        onClick={handleToggle}
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${
          isChecked ? 'bg-indigo-600 border-indigo-500 shadow-md shadow-indigo-500/30' : 'bg-slate-900 border-slate-700'
        }`}
      >
        <motion.svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-white"
          initial="unchecked"
          animate={isChecked ? 'checked' : 'unchecked'}
        >
          <motion.path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
            variants={{
              checked: { pathLength: 1, opacity: 1, transition: { duration: 0.2 } },
              unchecked: { pathLength: 0, opacity: 0, transition: { duration: 0.1 } },
            }}
          />
        </motion.svg>
      </motion.div>
      {label && <span className="text-sm font-medium text-slate-200">{label}</span>}
    </label>
  );
};
