import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface StickyHeaderProps {
  children: React.ReactNode;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.85)' : 'rgba(15, 23, 42, 0)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
        paddingTop: isScrolled ? '12px' : '20px',
        paddingBottom: isScrolled ? '12px' : '20px',
      }}
      transition={{ duration: 0.2 }}
      className="sticky top-0 z-40 w-full px-6 flex items-center justify-between border-b border-slate-800/40"
    >
      {children}
    </motion.header>
  );
};
