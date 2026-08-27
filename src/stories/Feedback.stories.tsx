import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  SkeletonLoader,
  Spinner3D,
  WaveLoader,
  ProgressRing,
  DotsLoader,
  ToastNotification,
  AlertBanner,
  SuccessCheckmark,
  ShimmerCard,
  CircularProgress,
} from '../index';

const meta: Meta = {
  title: 'Components/Feedback & Loaders',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Skeleton: StoryObj<typeof SkeletonLoader> = {
  render: () => (
    <div className="w-64 space-y-3">
      <SkeletonLoader height={140} />
      <SkeletonLoader variant="text" width="80%" />
      <SkeletonLoader variant="text" width="60%" />
    </div>
  ),
};

export const Spinner3DStory: StoryObj<typeof Spinner3D> = {
  render: () => <Spinner3D size={60} />,
};

export const WaveLoaderStory: StoryObj<typeof WaveLoader> = {
  render: () => <WaveLoader count={6} />,
};

export const ProgressRingStory: StoryObj<typeof ProgressRing> = {
  render: () => <ProgressRing progress={75} size={100} />,
};

export const DotsLoaderStory: StoryObj<typeof DotsLoader> = {
  render: () => <DotsLoader size={14} />,
};

export const ToastNotificationStory: StoryObj<typeof ToastNotification> = {
  render: () => (
    <ToastNotification
      isVisible={true}
      onClose={() => {}}
      title="Changes Saved"
      description="Your profile settings have been updated successfully."
      type="success"
    />
  ),
};

export const AlertBannerStory: StoryObj<typeof AlertBanner> = {
  render: () => (
    <div className="w-96">
      <AlertBanner type="warning" message="System maintenance scheduled for tonight." />
    </div>
  ),
};

export const SuccessCheckmarkStory: StoryObj<typeof SuccessCheckmark> = {
  render: () => <SuccessCheckmark size={80} />,
};

export const ShimmerCardStory: StoryObj<typeof ShimmerCard> = {
  render: () => (
    <ShimmerCard className="w-80">
      <h3 className="font-bold text-white text-lg">Shimmer Animated Card</h3>
      <p className="text-slate-400 text-sm mt-2">Smooth linear gradient passing through content.</p>
    </ShimmerCard>
  ),
};

export const CircularProgressStory: StoryObj<typeof CircularProgress> = {
  render: () => <CircularProgress value={85} size={120} />,
};
