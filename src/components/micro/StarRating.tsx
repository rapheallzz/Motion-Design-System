import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface StarRatingProps {
  maxStars?: number;
  rating?: number;
  onRatingChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  maxStars = 5,
  rating = 0,
  onRatingChange,
}) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (idx: number) => {
    setCurrentRating(idx);
    if (onRatingChange) onRatingChange(idx);
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, i) => {
        const starIdx = i + 1;
        const active = starIdx <= (hoverRating || currentRating);
        return (
          <motion.button
            key={starIdx}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setHoverRating(starIdx)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleClick(starIdx)}
            className="text-2xl focus:outline-none"
          >
            <motion.span
              animate={{ color: active ? '#f59e0b' : '#334155' }}
              transition={{ duration: 0.15 }}
            >
              ★
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
};
