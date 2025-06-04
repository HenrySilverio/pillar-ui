import { Meta, StoryObj } from '@storybook/react';

import Avatar, { type AvatarProps } from './Avatar';

const meta: Meta<AvatarProps> = {
  title: 'Design System/Atoms/Avatar',
  component: Avatar,
  argTypes: {
    className: { type: 'string' },
    size: { type: 'string' },
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {},
};

export const AvatarImage: StoryObj<AvatarProps> = {
  args: {
    size: "lg",
    image: "https://placehold.co/400x400.png",
  },
};