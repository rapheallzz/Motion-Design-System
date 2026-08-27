import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  width?: string | number;
  height?: string | number;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  width = 300,
  height = 200,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer select-none"
      style={{ width, height, perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full rounded-2xl shadow-xl"
      >
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
        >
          {front}
        </div>
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className="absolute inset-0 w-full h-full bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between"
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};
