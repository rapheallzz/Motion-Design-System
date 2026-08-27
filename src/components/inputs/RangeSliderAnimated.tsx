import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface RangeSliderAnimatedProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (val: number) => void;
}

export const RangeSliderAnimated: React.FC<RangeSliderAnimatedProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val);
    if (onChange) onChange(val);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
        <span>Value</span>
        <motion.span key={value} initial={{ scale: 1.2, color: '#38bdf8' }} animate={{ scale: 1, color: '#f8fafc' }}>
          {value}
        </motion.span>
      </div>
      <div className="relative flex items-center h-6">
        <div className="w-full h-2 rounded-full bg-slate-800 relative overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};
