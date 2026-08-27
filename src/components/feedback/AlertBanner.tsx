import React from 'react';
import { motion } from 'framer-motion';

export interface AlertBannerProps {
  type?: 'warning' | 'info' | 'error' | 'success';
  message: string;
  onDismiss?: () => void;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ type = 'info', message, onDismiss }) => {
  const styles = {
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    info: 'bg-sky-500/10 border-sky-500/30 text-sky-300',
    error: 'bg-rose-500/10 border-rose-500/30 text-rose-300',
    success: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className={`w-full px-4 py-3 rounded-xl border flex items-center justify-between shadow-sm overflow-hidden ${styles[type]}`}
    >
      <span className="text-sm font-medium">{message}</span>
      {onDismiss && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onDismiss}
          className="text-xs px-2 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors"
        >
          Dismiss
        </motion.button>
      )}
    </motion.div>
  );
};
