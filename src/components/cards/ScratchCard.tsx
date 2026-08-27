import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface ScratchCardProps {
  revealContent: React.ReactNode;
  width?: number;
  height?: number;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  revealContent,
  width = 300,
  height = 160,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratching, setIsScratching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#334155';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch to Reveal!', width / 2, height / 2);
  }, [width, height]);

  const scratch = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 select-none inline-block"
      style={{ width, height }}
    >
      <div className="absolute inset-0 bg-slate-900 p-4 flex items-center justify-center text-center">
        {revealContent}
      </div>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={() => setIsScratching(true)}
        onMouseUp={() => setIsScratching(false)}
        onMouseLeave={() => setIsScratching(false)}
        onMouseMove={scratch}
        className="absolute inset-0 cursor-pointer z-10"
      />
    </motion.div>
  );
};
