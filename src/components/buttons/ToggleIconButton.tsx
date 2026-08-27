import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface ToggleIconButtonProps {
  iconA: React.ReactNode;
  iconB: React.ReactNode;
  active?: boolean;
  onToggle?: (active: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
}

export const ToggleIconButton: React.FC<ToggleIconButtonProps> = ({
  iconA,
  iconB,
  active: controlledActive,
  onToggle,
  activeColor = 'text-rose-500 bg-rose-500/10 border-rose-500/30',
  inactiveColor = 'text-slate-400 bg-slate-800 border-slate-700',
}) => {
  const [internalActive, setInternalActive] = useState(false);
  const isActive = controlledActive !== undefined ? controlledActive : internalActive;

  const handleClick = () => {
    const next = !isActive;
    if (controlledActive === undefined) setInternalActive(next);
    if (onToggle) onToggle(next);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.85 }}
      onClick={handleClick}
      className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors shadow-sm ${
        isActive ? activeColor : inactiveColor
      }`}
    >
      <motion.div
        key={isActive ? 'active' : 'inactive'}
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 0 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      >
        {isActive ? iconB : iconA}
      </motion.div>
    </motion.button>
  );
};
