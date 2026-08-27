import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface BottomNavigationProps {
  items: NavItem[];
  defaultSelected?: string;
  onChange?: (id: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  defaultSelected,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultSelected || items[0]?.id);

  const handleSelect = (id: string) => {
    setSelected(id);
    if (onChange) onChange(id);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-full px-4 py-2 flex items-center gap-6 shadow-2xl">
      {items.map((item) => {
        const isSelected = selected === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleSelect(item.id)}
            className="relative flex flex-col items-center py-1 px-3 focus:outline-none"
          >
            <motion.div
              animate={{
                scale: isSelected ? 1.2 : 1,
                y: isSelected ? -2 : 0,
                color: isSelected ? '#38bdf8' : '#94a3b8',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            >
              {item.icon}
            </motion.div>
            <span className={`text-[10px] mt-1 font-medium ${isSelected ? 'text-sky-400' : 'text-slate-400'}`}>
              {item.label}
            </span>
            {isSelected && (
              <motion.div
                layoutId="bottom-nav-indicator"
                className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-sky-400"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
