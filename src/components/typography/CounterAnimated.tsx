import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface CounterAnimatedProps {
  value: number;
  duration?: number; // seconds
  className?: string;
}

export const CounterAnimated: React.FC<CounterAnimatedProps> = ({
  value,
  duration = 1.5,
  className = '',
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    const increment = (end - start) / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.span
      key={value}
      initial={{ scale: 0.9, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`font-bold font-mono text-3xl text-cyan-400 ${className}`}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};
