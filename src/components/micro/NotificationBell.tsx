import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface NotificationBellProps {
  count?: number;
  onClick?: () => void;
}

export const NotificationBell: React.FC<NotificationBellProps> = ({ count = 3, onClick }) => {
  const [hasNew, setHasNew] = useState(count > 0);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setHasNew(false);
        if (onClick) onClick();
      }}
      className="relative p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white shadow-lg flex items-center justify-center"
    >
      <motion.span
        animate={hasNew ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.6 }}
        className="text-xl"
      >
        🔔
      </motion.span>
      {hasNew && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md border-2 border-slate-900"
        >
          {count}
        </motion.span>
      )}
    </motion.button>
  );
};
