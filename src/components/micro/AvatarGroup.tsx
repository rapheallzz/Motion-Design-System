import React from 'react';
import { motion } from 'framer-motion';

export interface AvatarItem {
  id: string;
  src: string;
  name: string;
}

export interface AvatarGroupProps {
  avatars: AvatarItem[];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars }) => {
  return (
    <div className="flex items-center -space-x-3 overflow-hidden p-2">
      {avatars.map((avatar, idx) => (
        <motion.div
          key={avatar.id}
          whileHover={{ scale: 1.25, zIndex: 30 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden shadow-lg cursor-pointer"
        >
          <img src={avatar.src} alt={avatar.name} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};
