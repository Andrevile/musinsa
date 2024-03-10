import { Meta, StoryObj } from '@storybook/react';

import { ChipButton } from './ChipButton';
import { SearchIcon } from './icons/SearchIcon';

const meta = {
  title: 'ChipButton',
  component: ChipButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ChipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { children: '텍스트' },
};
export const Primary: Story = {
  args: { children: '텍스트', primary: true },
};
export const WithIcon: Story = {
  args: { children: '텍스트', icon: SearchIcon },
};
