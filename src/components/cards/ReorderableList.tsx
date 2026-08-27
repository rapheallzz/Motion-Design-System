import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';

export interface ReorderableListProps {
  initialItems: string[];
}

export const ReorderableList: React.FC<ReorderableListProps> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-2 w-full max-w-sm">
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          whileDrag={{ scale: 1.04, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}
          className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
        >
          <span>{item}</span>
          <span className="text-slate-500 text-lg">≡</span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
