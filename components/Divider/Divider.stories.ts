import { Meta, StoryObj } from '@storybook/react'
import Divider, { DividerProps } from './Divider'

const meta: Meta<DividerProps> = {
  title: 'Design System/Atoms/Divider',
  component: Divider,
  argTypes: {
    children: {
      type: 'string'
    },
  }
}

export default meta

export const Primary: StoryObj<DividerProps> = {
  args: {}
}

export const Default: StoryObj<DividerProps> = {
  args: {}
}

export const DividerWithProps: StoryObj<DividerProps> = {
  args: {
    children: 'Hello World!'
  }
}