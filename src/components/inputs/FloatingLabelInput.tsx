import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  value,
  onChange,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [val, setVal] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    if (onChange) onChange(e);
  };

  const active = isFocused || Boolean(val);

  return (
    <div className="relative w-full">
      <motion.label
        animate={{
          y: active ? -24 : 10,
          scale: active ? 0.85 : 1,
          color: isFocused ? '#38bdf8' : active ? '#94a3b8' : '#64748b',
        }}
        transition={{ duration: 0.15 }}
        className="absolute left-3 top-0 pointer-events-none origin-left font-medium"
      >
        {label}
      </motion.label>
      <input
        value={val}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-3 py-3 pt-5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors ${className}`}
        {...props}
      />
    </div>
  );
};
