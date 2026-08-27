import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface LikeButtonAnimatedProps {
  initialLiked?: boolean;
  count?: number;
  onChange?: (liked: boolean) => void;
}

export const LikeButtonAnimated: React.FC<LikeButtonAnimatedProps> = ({
  initialLiked = false,
  count = 42,
  onChange,
}) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likeCount, setLikeCount] = useState(count);

  const toggle = () => {
    const next = !liked;
    setLiked(next);
    setLikeCount((prev) => (next ? prev + 1 : prev - 1));
    if (onChange) onChange(next);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={toggle}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
        liked
          ? 'bg-rose-500/10 border-rose-500/40 text-rose-500'
          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
      }`}
    >
      <motion.svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current"
        animate={{ scale: liked ? [1, 1.4, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </motion.svg>
      <motion.span key={likeCount} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-sm font-semibold">
        {likeCount}
      </motion.span>
    </motion.button>
  );
};
