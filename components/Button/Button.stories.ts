import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '@/components/Button/Button';

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      type: 'boolean'
    },
    className: {
      type: 'string'
    }
  },
};

export default meta;
export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
    args: {
    children: 'Button',
    disabled: true,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'secondary'
  }
}

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'secondary',
    disabled: true
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'tertiary',
  }
}
export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    disabled: true
  }
}

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet',
    variant: 'tertiary'
  }
}

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet'
  }
}

export const VioletDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    className: 'theme-violet',
    disabled: true
  }
}

