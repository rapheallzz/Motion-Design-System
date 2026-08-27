import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface CollapsibleSidebarProps {
  items: SidebarItem[];
  defaultCollapsed?: boolean;
}

export const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({
  items,
  defaultCollapsed = false,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      className="h-full bg-slate-900 border-r border-slate-800 p-3 flex flex-col justify-between overflow-hidden"
    >
      <div className="space-y-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
        >
          {collapsed ? '→' : '← Collapse'}
        </button>
        <nav className="space-y-1">
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ x: 4, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer text-slate-300 hover:text-white transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center text-cyan-400">{item.icon}</div>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};
