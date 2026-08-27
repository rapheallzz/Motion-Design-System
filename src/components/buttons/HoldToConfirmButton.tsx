import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export interface HoldToConfirmButtonProps {
  children: React.ReactNode;
  onConfirm: () => void;
  holdDuration?: number; // in milliseconds
  className?: string;
}

export const HoldToConfirmButton: React.FC<HoldToConfirmButtonProps> = ({
  children,
  onConfirm,
  holdDuration = 1500,
  className = '',
}) => {
  const [holding, setHolding] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startHold = () => {
    setHolding(true);
    timerRef.current = setTimeout(() => {
      onConfirm();
      setHolding(false);
    }, holdDuration);
  };

  const cancelHold = () => {
    setHolding(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <motion.button
      onMouseDown={startHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      onTouchStart={startHold}
      onTouchEnd={cancelHold}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold bg-rose-600/20 text-rose-400 border border-rose-500/40 select-none ${className}`}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-rose-600"
        initial={{ width: '0%' }}
        animate={{ width: holding ? '100%' : '0%' }}
        transition={{ duration: holding ? holdDuration / 1000 : 0.2, ease: 'linear' }}
      />
      <span className="relative z-10 text-white">{children}</span>
    </motion.button>
  );
};
