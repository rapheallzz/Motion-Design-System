import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
  title?: string;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  position = 'right',
  children,
  title,
}) => {
  const variants = {
    left: {
      initial: { x: '-100%' },
      animate: { x: 0 },
      exit: { x: '-100%' },
      className: 'top-0 left-0 bottom-0 w-80',
    },
    right: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' },
      className: 'top-0 right-0 bottom-0 w-80',
    },
    bottom: {
      initial: { y: '100%' },
      animate: { y: 0 },
      exit: { y: '100%' },
      className: 'bottom-0 left-0 right-0 h-96 rounded-t-2xl',
    },
  };

  const current = variants[position];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />
          <motion.div
            initial={current.initial}
            animate={current.animate}
            exit={current.exit}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed bg-slate-900 border-slate-800 border p-6 shadow-2xl z-10 ${current.className}`}
          >
            {title && (
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
              </div>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
