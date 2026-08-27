import React from 'react';
import { motion } from 'framer-motion';

export interface Spinner3DProps {
  size?: number;
  color?: string;
}

export const Spinner3D: React.FC<Spinner3DProps> = ({ size = 48, color = 'border-cyan-400' }) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <motion.div
        className={`absolute inset-0 rounded-full border-2 border-t-transparent ${color}`}
        animate={{ rotateX: [0, 180, 360], rotateY: [0, 180, 360], rotateZ: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={`absolute inset-1 rounded-full border-2 border-b-transparent border-purple-400`}
        animate={{ rotateX: [360, 180, 0], rotateY: [0, 180, 360], rotateZ: [360, 180, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};
