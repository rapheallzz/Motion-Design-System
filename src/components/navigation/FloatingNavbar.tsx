import React from 'react';
import { motion } from 'framer-motion';

export interface FloatingNavbarProps {
  brand: React.ReactNode;
  links: { label: string; href: string }[];
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ brand, links }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 flex items-center justify-between gap-8 shadow-2xl min-w-[320px]"
    >
      <div className="font-bold text-white text-lg">{brand}</div>
      <div className="flex items-center gap-4">
        {links.map((link, idx) => (
          <motion.a
            key={idx}
            whileHover={{ scale: 1.08, color: '#38bdf8' }}
            whileTap={{ scale: 0.95 }}
            href={link.href}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};
