import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  TypewriterText,
  FadeInText,
  WordsStaggerText,
  CounterAnimated,
  TextGlow,
  GlitchText,
  ScrambleText,
  WaveText,
} from '../index';

const meta: Meta = {
  title: 'Components/Typography & Text Effects',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Typewriter: StoryObj = {
  render: () => <TypewriterText text="Creating smooth micro-interactions..." className="text-xl text-cyan-300" />,
};

export const FadeIn: StoryObj = {
  render: () => <FadeInText text="Seamless Motion Components" className="text-2xl font-bold text-white" />,
};

export const WordsStagger: StoryObj = {
  render: () => (
    <WordsStaggerText
      text="Design systems powered by spring physics"
      className="text-2xl font-semibold text-purple-300 max-w-md"
    />
  ),
};

export const Counter: StoryObj = {
  render: () => <CounterAnimated value={10450} duration={2} />,
};

export const GlowText: StoryObj = {
  render: () => <TextGlow text="ULTRA GLOW MOTION" className="text-3xl font-black" />,
};

export const Glitch: StoryObj = {
  render: () => <GlitchText text="CYBERPUNK GLITCH" className="text-3xl font-extrabold tracking-widest" />,
};

export const Scramble: StoryObj = {
  render: () => (
    <div className="text-xl">
      Hover to decrypt: <ScrambleText text="ENCRYPTED_DATA_KEY" />
    </div>
  ),
};

export const Wave: StoryObj = {
  render: () => <WaveText text="WAVING TEXT ANIMATION" className="text-2xl text-amber-400" />,
};
