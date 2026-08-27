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
      className="cursor-pointer perspective-1000 select-none"
      style={{ width, height }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full rounded-2xl shadow-xl transform-style-3d"
      >
        <div className="absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between backface-hidden">
          {front}
        </div>
        <div className="absolute inset-0 w-full h-full bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between rotate-y-180 backface-hidden">
          {back}
        </div>
      </motion.div>
    </div>
  );
};
