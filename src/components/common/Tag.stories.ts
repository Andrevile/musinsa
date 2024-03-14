import { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta = {
  title: 'Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { item: { id: '1', text: '텍스트' }, closable: false },
};

export const Closable: Story = {
  args: { item: { id: '1', text: '스니커즈' } },
};
