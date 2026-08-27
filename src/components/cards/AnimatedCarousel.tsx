import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AnimatedCarouselProps {
  slides: { id: string; content: React.ReactNode }[];
}

export const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-lg h-64 overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center text-slate-200"
        >
          {slides[currentIndex]?.content}
        </motion.div>
      </AnimatePresence>
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <button
          onClick={prevSlide}
          className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-semibold"
        >
          ← Prev
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-sky-400' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-semibold"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
