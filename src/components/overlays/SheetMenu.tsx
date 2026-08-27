import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SheetMenuProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const SheetMenu: React.FC<SheetMenuProps> = ({ isOpen, onClose, title, children }) => {
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
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto bg-slate-900 border-t border-slate-800 rounded-t-3xl p-6 shadow-2xl z-10"
          >
            <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-4" />
            {title && <h3 className="text-xl font-bold text-white mb-4">{title}</h3>}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
