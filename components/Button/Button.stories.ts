import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "@/components/Button/Button";


const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {}
}

export default meta
export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Button'
  }
}

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
    className: 'theme-violet'
  }
}