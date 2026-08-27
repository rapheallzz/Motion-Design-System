import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SearchInputAnimatedProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchInputAnimated: React.FC<SearchInputAnimatedProps> = ({
  placeholder = 'Search...',
  onSearch,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <motion.div
      animate={{ width: isExpanded ? 280 : 48 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="relative h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center overflow-hidden shadow-lg"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white transition-colors shrink-0"
      >
        🔍
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.input
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 0, width: 0 }}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            className="bg-transparent text-white pr-4 focus:outline-none text-sm w-full"
            autoFocus
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
