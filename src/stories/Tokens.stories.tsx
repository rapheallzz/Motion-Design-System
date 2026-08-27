import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { springs, durations, easings, colors, visualTokens } from '../tokens';

const MetaConfig: Meta = {
  title: 'Design Tokens/Overview',
};

export default MetaConfig;

export const MotionSprings: StoryObj = {
  render: () => (
    <div className="p-6 space-y-6 text-slate-100 font-sans">
      <h2 className="text-2xl font-bold text-sky-400">Spring Physics Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(springs).map(([key, value]) => (
          <div key={key} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <h3 className="font-semibold text-lg text-white capitalize">{key}</h3>
            <pre className="text-xs bg-slate-950 p-2 rounded text-cyan-300 overflow-x-auto">
              {JSON.stringify(value, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ColorPalette: StoryObj = {
  render: () => (
    <div className="p-6 space-y-6 text-slate-100 font-sans">
      <h2 className="text-2xl font-bold text-sky-400">Color Tokens</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-white mb-2">Primary Palette</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(colors.primary).map(([step, hex]) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-16 h-12 rounded-lg shadow" style={{ backgroundColor: hex }} />
                <span className="text-xs text-slate-400 mt-1">{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Accent Colors</h3>
          <div className="flex flex-wrap gap-3">
            {Object.entries(colors.accent).map(([name, hex]) => (
              <div key={name} className="flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: hex }} />
                <span className="text-xs font-mono text-slate-200">{name} ({hex})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};
