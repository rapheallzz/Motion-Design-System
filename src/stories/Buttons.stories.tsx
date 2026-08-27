import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  RippleButton,
  MagneticButton,
  PulseButton,
  GlowButton,
  ExpandingFAB,
  ShinyButton,
  HoldToConfirmButton,
  ParticleButton,
  SplitButton,
  ToggleIconButton,
} from '../index';

const meta: Meta = {
  title: 'Components/Buttons',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Ripple: StoryObj<typeof RippleButton> = {
  render: (args) => <RippleButton {...args}>Click for Ripple</RippleButton>,
};

export const Magnetic: StoryObj<typeof MagneticButton> = {
  render: (args) => <MagneticButton {...args}>Hover Me (Magnetic)</MagneticButton>,
};

export const Pulse: StoryObj<typeof PulseButton> = {
  render: (args) => <PulseButton {...args}>Pulsing Action</PulseButton>,
};

export const Glow: StoryObj<typeof GlowButton> = {
  render: (args) => <GlowButton {...args}>Glowing Border</GlowButton>,
};

export const ExpandingFABStory: StoryObj<typeof ExpandingFAB> = {
  render: () => (
    <ExpandingFAB
      actions={[
        { id: '1', label: 'New Document', icon: '📄', onClick: () => alert('Document') },
        { id: '2', label: 'Upload Image', icon: '🖼️', onClick: () => alert('Image') },
      ]}
    />
  ),
};

export const Shiny: StoryObj<typeof ShinyButton> = {
  render: (args) => <ShinyButton {...args}>Shiny Gradient</ShinyButton>,
};

export const HoldToConfirm: StoryObj<typeof HoldToConfirmButton> = {
  render: () => (
    <HoldToConfirmButton onConfirm={() => alert('Confirmed!')}>
      Hold 1.5s to Delete
    </HoldToConfirmButton>
  ),
};

export const Particle: StoryObj<typeof ParticleButton> = {
  render: (args) => <ParticleButton {...args}>Burst Particles</ParticleButton>,
};

export const Split: StoryObj<typeof SplitButton> = {
  render: () => (
    <SplitButton
      primaryLabel="Deploy App"
      onPrimaryClick={() => alert('Deploying')}
      options={[
        { label: 'Save Draft', onClick: () => alert('Saved') },
        { label: 'Export Config', onClick: () => alert('Exported') },
      ]}
    />
  ),
};

export const ToggleIcon: StoryObj<typeof ToggleIconButton> = {
  render: () => <ToggleIconButton iconA="🤍" iconB="❤️" />,
};
