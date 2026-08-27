import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AnimatedTabs,
  Breadcrumbs,
  BottomNavigation,
  AccordionGroup,
  SegmentedControl,
  Stepper,
  ScrollProgressBar,
  StickyHeader,
  FloatingNavbar,
  CollapsibleSidebar,
} from '../index';

const meta: Meta = {
  title: 'Components/Navigation & Layout',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const AnimatedTabsStory: StoryObj = {
  render: () => (
    <AnimatedTabs
      tabs={[
        { id: 'overview', label: 'Overview' },
        { id: 'analytics', label: 'Analytics' },
        { id: 'reports', label: 'Reports' },
        { id: 'settings', label: 'Settings' },
      ]}
    />
  ),
};

export const BreadcrumbsStory: StoryObj = {
  render: () => (
    <Breadcrumbs
      items={[
        { label: 'Home', href: '#' },
        { label: 'Components', href: '#' },
        { label: 'Navigation', href: '#' },
      ]}
    />
  ),
};

export const BottomNavigationStory: StoryObj = {
  render: () => (
    <div className="h-64 relative w-80 bg-slate-950 rounded-2xl border border-slate-800 p-4">
      <p className="text-xs text-slate-500 text-center mt-10">Bottom navigation bar preview</p>
      <BottomNavigation
        items={[
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'search', label: 'Search', icon: '🔍' },
          { id: 'profile', label: 'Profile', icon: '👤' },
        ]}
      />
    </div>
  ),
};

export const AccordionGroupStory: StoryObj = {
  render: () => (
    <div className="w-96">
      <AccordionGroup
        items={[
          { id: '1', title: 'What is Motion Design System?', content: 'A complete React motion design system with Framer Motion physics.' },
          { id: '2', title: 'Is Storybook supported?', content: 'Yes! Storybook controls and token docs are fully built-in.' },
        ]}
      />
    </div>
  ),
};

export const SegmentedControlStory: StoryObj = {
  render: () => <SegmentedControl options={['Day', 'Week', 'Month', 'Year']} />,
};

export const StepperStory: StoryObj = {
  render: () => (
    <div className="w-[450px]">
      <Stepper
        steps={[
          { title: 'Account' },
          { title: 'Payment' },
          { title: 'Confirm' },
        ]}
        currentStep={1}
      />
    </div>
  ),
};

export const ScrollProgressBarStory: StoryObj = {
  render: () => (
    <div className="w-full space-y-4 text-slate-400">
      <p>Scroll down to test the top progress bar indicator.</p>
      <ScrollProgressBar />
    </div>
  ),
};

export const StickyHeaderStory: StoryObj = {
  render: () => (
    <div className="w-full max-w-md h-40 overflow-y-auto border border-slate-800 rounded-2xl bg-slate-950">
      <StickyHeader>
        <span className="font-bold text-white text-sm">App Dashboard</span>
        <button className="text-xs px-3 py-1 bg-cyan-600 rounded-lg text-white">Action</button>
      </StickyHeader>
      <div className="p-4 space-y-4 text-xs text-slate-400">
        <p>Content block 1...</p>
        <p>Content block 2...</p>
        <p>Content block 3...</p>
        <p>Content block 4...</p>
      </div>
    </div>
  ),
};

export const FloatingNavbarStory: StoryObj = {
  render: () => (
    <div className="relative h-40 w-full max-w-lg bg-slate-950 rounded-2xl p-4 overflow-hidden border border-slate-800">
      <FloatingNavbar
        brand="⚡ MotionUI"
        links={[
          { label: 'Docs', href: '#' },
          { label: 'Tokens', href: '#' },
          { label: 'GitHub', href: '#' },
        ]}
      />
    </div>
  ),
};

export const CollapsibleSidebarStory: StoryObj = {
  render: () => (
    <div className="h-72 flex border border-slate-800 rounded-2xl overflow-hidden bg-slate-950">
      <CollapsibleSidebar
        items={[
          { id: '1', label: 'Dashboard', icon: '📊' },
          { id: '2', label: 'Projects', icon: '📁' },
          { id: '3', label: 'Settings', icon: '⚙️' },
        ]}
      />
      <div className="p-6 text-slate-400 text-sm flex-1">Sidebar preview panel</div>
    </div>
  ),
};
