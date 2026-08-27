import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ToastNotificationProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info';
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  isVisible,
  onClose,
  title,
  description,
  type = 'info',
}) => {
  const borderColors = {
    success: 'border-emerald-500/50 bg-emerald-950/80 text-emerald-300',
    error: 'border-rose-500/50 bg-rose-950/80 text-rose-300',
    info: 'border-cyan-500/50 bg-slate-900/90 text-cyan-300',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className={`fixed bottom-5 right-5 z-50 p-4 rounded-xl border backdrop-blur-md shadow-2xl min-w-[280px] max-w-sm ${borderColors[type]}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="font-semibold text-sm text-white">{title}</h4>
              {description && <p className="text-xs text-slate-300 mt-1">{description}</p>}
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors text-xs p-1"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
