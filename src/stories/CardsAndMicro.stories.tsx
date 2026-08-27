import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  FlipCard,
  TiltCard,
  SwipeableCard,
  ExpandableCard,
  ParallaxCard,
  MorphingContainer,
  MagneticIcon,
  LikeButtonAnimated,
  ScratchCard,
  ReorderableList,
  AnimatedCarousel,
  AnimatedBadge,
  PulseDot,
  StarRating,
  FloatingElement,
  AnimatedCounterBadge,
  AvatarGroup,
  NotificationBell,
} from '../index';

const meta: Meta = {
  title: 'Components/Cards & Micro Interactions',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const FlipCardStory: StoryObj = {
  render: () => (
    <FlipCard
      front={
        <div>
          <h3 className="text-xl font-bold text-white">Front Side</h3>
          <p className="text-sm text-slate-400 mt-2">Click to flip card</p>
        </div>
      }
      back={
        <div>
          <h3 className="text-xl font-bold text-cyan-400">Back Side</h3>
          <p className="text-sm text-slate-300 mt-2">Reversed 3D transform.</p>
        </div>
      }
    />
  ),
};

export const TiltCardStory: StoryObj = {
  render: () => (
    <TiltCard className="w-80">
      <h3 className="font-bold text-white text-lg">3D Tilt Effect</h3>
      <p className="text-slate-400 text-sm mt-2">Perspective tilt tracking mouse coordinates.</p>
    </TiltCard>
  ),
};

export const SwipeableCardStory: StoryObj = {
  render: () => (
    <SwipeableCard onSwipeLeft={() => alert('Swiped Left')} onSwipeRight={() => alert('Swiped Right')}>
      <h3 className="font-bold text-white text-lg">Swipe Card</h3>
      <p className="text-slate-400 text-sm mt-2">Drag horizontally left or right to dismiss.</p>
    </SwipeableCard>
  ),
};

export const ExpandableCardStory: StoryObj = {
  render: () => (
    <ExpandableCard
      title="Morphing Card Layout"
      shortText="Layout animations smoothly animate size expansion."
      fullText={<p>Full detail view unlocked with smooth Framer Motion layout transition.</p>}
    />
  ),
};

export const ParallaxCardStory: StoryObj = {
  render: () => (
    <ParallaxCard
      title="Neon City Skyline"
      category="Architecture"
      imageSrc="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80"
    />
  ),
};

export const MorphingContainerStory: StoryObj = {
  render: () => (
    <MorphingContainer
      childrenCollapsed={<span className="text-white font-bold">Tap to Expand</span>}
      childrenExpanded={
        <div className="space-y-2 text-slate-200">
          <h4 className="font-bold text-cyan-400 text-lg">Expanded Morph Container</h4>
          <p className="text-sm">Smooth spring layout expansion with Framer Motion.</p>
        </div>
      }
    />
  ),
};

export const MagneticIconStory: StoryObj = {
  render: () => <MagneticIcon icon="⚡" onClick={() => alert('Icon Clicked')} />,
};

export const LikeButtonStory: StoryObj = {
  render: () => <LikeButtonAnimated initialLiked={false} count={128} />,
};

export const ScratchCardStory: StoryObj = {
  render: () => (
    <ScratchCard
      revealContent={
        <div>
          <span className="text-2xl font-black text-amber-400">🎉 YOU WON!</span>
          <p className="text-xs text-slate-300">Code: MOTION2025</p>
        </div>
      }
    />
  ),
};

export const ReorderableListStory: StoryObj = {
  render: () => (
    <ReorderableList initialItems={['1. Design System Tokens', '2. Framer Motion Physics', '3. Storybook Docs']} />
  ),
};

export const AnimatedCarouselStory: StoryObj = {
  render: () => (
    <AnimatedCarousel
      slides={[
        { id: '1', content: <div className="text-xl font-bold text-sky-400">Slide 1: Spring Physics</div> },
        { id: '2', content: <div className="text-xl font-bold text-purple-400">Slide 2: 60+ Components</div> },
        { id: '3', content: <div className="text-xl font-bold text-pink-400">Slide 3: Ready for Export</div> },
      ]}
    />
  ),
};

export const AnimatedBadgeStory: StoryObj = {
  render: () => <AnimatedBadge label="LIVE UPDATES" count={5} />,
};

export const PulseDotStory: StoryObj = {
  render: () => <PulseDot color="bg-emerald-400" size={14} />,
};

export const StarRatingStory: StoryObj = {
  render: () => <StarRating rating={4} maxStars={5} />,
};

export const FloatingElementStory: StoryObj = {
  render: () => (
    <FloatingElement>
      <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg">
        Floating 3D Card
      </div>
    </FloatingElement>
  ),
};

export const CounterBadgeStory: StoryObj = {
  render: () => <AnimatedCounterBadge count={99} />,
};

export const AvatarGroupStory: StoryObj = {
  render: () => (
    <AvatarGroup
      avatars={[
        { id: '1', name: 'User A', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' },
        { id: '2', name: 'User B', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
        { id: '3', name: 'User C', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
      ]}
    />
  ),
};

export const NotificationBellStory: StoryObj = {
  render: () => <NotificationBell count={4} />,
};
