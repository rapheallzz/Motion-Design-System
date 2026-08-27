import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export interface SwipeableCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export const SwipeableCard: React.FC<SwipeableCardProps> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const [removed, setRemoved] = useState(false);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -100) {
      setRemoved(true);
      if (onSwipeLeft) onSwipeLeft();
    } else if (info.offset.x > 100) {
      setRemoved(true);
      if (onSwipeRight) onSwipeRight();
    }
  };

  if (removed) return null;

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileTap={{ cursor: 'grabbing' }}
      className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl cursor-grab select-none"
    >
      {children}
    </motion.div>
  );
};
