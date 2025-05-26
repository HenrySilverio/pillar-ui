import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';


const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {},
};

export default meta

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Input'
  }

}
export const PrimaryDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true
  }
}

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
  }
}

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    disabled: true
  }
}

export const MultilineWithLabel: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    label: 'label',
  }
}

export const MultilineWithLabelDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    multiline: true,
    label: 'label',
    disabled: true
  }
}


