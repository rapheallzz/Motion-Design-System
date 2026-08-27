import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface AnimatedBadgeProps {
  label: string;
  count?: number;
  pulse?: boolean;
}

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ label, count, pulse = true }) => {
  return (
    <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200">
      {pulse && (
        <span className="relative flex h-2 w-2">
          <motion.span
            animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
          />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
        </span>
      )}
      <span>{label}</span>
      {count !== undefined && (
        <motion.span
          key={count}
          initial={{ scale: 1.4, color: '#38bdf8' }}
          animate={{ scale: 1, color: '#f8fafc' }}
          className="px-1.5 py-0.5 rounded-full bg-slate-700 text-[10px] font-bold"
        >
          {count}
        </motion.span>
      )}
    </div>
  );
};
