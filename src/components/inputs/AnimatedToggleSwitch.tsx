import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface AnimatedToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const AnimatedToggleSwitch: React.FC<AnimatedToggleSwitchProps> = ({
  checked: controlledChecked,
  onChange,
  label,
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
        animate={{ backgroundColor: isChecked ? '#0284c7' : '#334155' }}
        onClick={handleToggle}
        className="w-14 h-8 rounded-full p-1 relative flex items-center cursor-pointer shadow-inner"
      >
        <motion.div
          animate={{ x: isChecked ? 24 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-[10px]"
        >
          {isChecked ? '✓' : ''}
        </motion.div>
      </motion.div>
      {label && <span className="text-sm font-medium text-slate-200">{label}</span>}
    </label>
  );
};
