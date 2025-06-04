import type { Meta, StoryObj } from '@storybook/react';
import AlertBox, { AlertBoxProps } from './AlertBox';
import { SingleAction, DoubleActions, SuccessActions } from './AlertBox.actions';

const meta: Meta<AlertBoxProps> = {
  title: 'Design System/Molecules/AlertBox',
  component: AlertBox,
};

export default meta;

export const Info: StoryObj<AlertBoxProps> = {
  args: {
    type: 'info',
    title: 'Amet minim mollit non deserunt ullamco est',
    actions: SingleAction,
    onClose: () => alert('Fechado'),
  },
};

export const Error: StoryObj<AlertBoxProps> = {
  args: {
    type: 'error',
    title: 'Amet minim mollit non deserunt ullamco est',
    actions: DoubleActions,
    onClose: () => alert('Fechado'),
  },
};

export const Success: StoryObj<AlertBoxProps> = {
  args: {
    type: 'success',
    title: 'Amet minim mollit non deserunt ullamco est',
    description: 'Amet minim mollit non deserunt ullamco est',
    actions: SuccessActions,
    onClose: () => alert('Fechado'),
  },
};