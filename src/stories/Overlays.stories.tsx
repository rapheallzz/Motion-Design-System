import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AnimatedModal,
  SlideDrawer,
  FloatingTooltip,
  PopoverCard,
  DropdownMenu,
  ContextMenu,
  CommandPalette,
  SheetMenu,
  SpotlightCard,
  HoverCard,
} from '../index';

const meta: Meta = {
  title: 'Components/Overlays & Menus',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const AnimatedModalStory: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-600 text-white rounded-xl">
          Open Modal
        </button>
        <AnimatedModal isOpen={open} onClose={() => setOpen(false)} title="Interactive Modal">
          <p>This modal enters with a smooth spring physics effect.</p>
        </AnimatedModal>
      </div>
    );
  },
};

export const SlideDrawerStory: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-cyan-600 text-white rounded-xl">
          Open Drawer
        </button>
        <SlideDrawer isOpen={open} onClose={() => setOpen(false)} title="Side Drawer">
          <p className="text-slate-300">Drawer content goes here.</p>
        </SlideDrawer>
      </div>
    );
  },
};

export const FloatingTooltipStory: StoryObj = {
  render: () => (
    <FloatingTooltip content="Tooltip details hover effect">
      <button className="px-4 py-2 bg-slate-800 border border-slate-700 text-white rounded-xl">
        Hover over me
      </button>
    </FloatingTooltip>
  ),
};

export const PopoverCardStory: StoryObj = {
  render: () => (
    <PopoverCard
      trigger={<button className="px-4 py-2 bg-purple-600 text-white rounded-xl">Toggle Popover</button>}
    >
      <h4 className="font-bold text-white mb-1">Popover Header</h4>
      <p className="text-xs text-slate-400">Useful information displayed in popover card.</p>
    </PopoverCard>
  ),
};

export const DropdownMenuStory: StoryObj = {
  render: () => (
    <DropdownMenu
      label="Actions Menu"
      items={[
        { id: '1', label: 'Edit Item', icon: '✏️' },
        { id: '2', label: 'Duplicate', icon: '📋' },
        { id: '3', label: 'Delete Item', icon: '🗑️' },
      ]}
    />
  ),
};

export const ContextMenuStory: StoryObj = {
  render: () => (
    <ContextMenu
      items={[
        { id: '1', label: 'Copy Link', onClick: () => alert('Copied') },
        { id: '2', label: 'Inspect Element', onClick: () => alert('Inspected') },
      ]}
    >
      <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl text-slate-300">
        Right click inside this area to activate Context Menu
      </div>
    </ContextMenu>
  ),
};

export const CommandPaletteStory: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-emerald-600 text-white rounded-xl">
          Open Command Palette (Cmd + K)
        </button>
        <CommandPalette
          isOpen={open}
          onClose={() => setOpen(false)}
          items={[
            { id: '1', label: 'Go to Dashboard', category: 'Navigation', onSelect: () => alert('Navigated') },
            { id: '2', label: 'Create New Project', category: 'Actions', onSelect: () => alert('Created') },
          ]}
        />
      </div>
    );
  },
};

export const SheetMenuStory: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)} className="px-4 py-2 bg-pink-600 text-white rounded-xl">
          Open Bottom Sheet
        </button>
        <SheetMenu isOpen={open} onClose={() => setOpen(false)} title="Mobile Sheet Options">
          <p className="text-slate-300">Clean spring-animated bottom sheet drawer.</p>
        </SheetMenu>
      </div>
    );
  },
};

export const SpotlightCardStory: StoryObj = {
  render: () => (
    <SpotlightCard className="w-80">
      <h3 className="font-bold text-white text-lg">Cursor Spotlight</h3>
      <p className="text-slate-400 text-sm mt-2">Move cursor over this card to see dynamic light spotlight.</p>
    </SpotlightCard>
  ),
};

export const HoverCardStory: StoryObj = {
  render: () => (
    <HoverCard trigger={<span className="text-cyan-400 font-semibold underline cursor-pointer">@user_handle</span>}>
      <h4 className="font-bold text-white">Alex Developer</h4>
      <p className="text-xs text-slate-400 mt-1">Senior UI/UX & Motion Systems Engineer.</p>
    </HoverCard>
  ),
};
