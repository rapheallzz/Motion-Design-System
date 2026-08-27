import React from 'react';
import { motion } from 'framer-motion';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-400">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-slate-600">/</span>}
          <motion.a
            whileHover={{ scale: 1.05, color: '#38bdf8' }}
            whileTap={{ scale: 0.95 }}
            href={item.href || '#'}
            className="hover:underline transition-colors font-medium text-slate-300"
          >
            {item.label}
          </motion.a>
        </React.Fragment>
      ))}
    </nav>
  );
};
