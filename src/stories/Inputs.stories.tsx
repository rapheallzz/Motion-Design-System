import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AnimatedToggleSwitch,
  FloatingLabelInput,
  CheckboxAnimated,
  RadioGroupAnimated,
  RangeSliderAnimated,
  PinInputAnimated,
  SearchInputAnimated,
  MultiSelectTags,
} from '../index';

const meta: Meta = {
  title: 'Components/Inputs & Forms',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ToggleSwitch: StoryObj = {
  render: () => <AnimatedToggleSwitch label="Enable notifications" />,
};

export const FloatingLabel: StoryObj = {
  render: () => (
    <div className="w-80">
      <FloatingLabelInput label="Email Address" type="email" />
    </div>
  ),
};

export const Checkbox: StoryObj = {
  render: () => <CheckboxAnimated label="I agree to terms and conditions" />,
};

export const RadioGroup: StoryObj = {
  render: () => (
    <RadioGroupAnimated
      options={[
        { value: 'standard', label: 'Standard Shipping (3-5 days)' },
        { value: 'express', label: 'Express Shipping (1-2 days)' },
        { value: 'overnight', label: 'Overnight Priority' },
      ]}
    />
  ),
};

export const RangeSlider: StoryObj = {
  render: () => (
    <div className="w-80">
      <RangeSliderAnimated min={0} max={100} defaultValue={40} />
    </div>
  ),
};

export const PinInput: StoryObj = {
  render: () => <PinInputAnimated length={4} onComplete={(pin) => alert(`PIN: ${pin}`)} />,
};

export const SearchInput: StoryObj = {
  render: () => <SearchInputAnimated placeholder="Search components..." />,
};

export const MultiSelect: StoryObj = {
  render: () => (
    <MultiSelectTags
      options={['React', 'Framer Motion', 'TypeScript', 'Tailwind', 'Storybook']}
      defaultSelected={['React', 'Framer Motion']}
    />
  ),
};
