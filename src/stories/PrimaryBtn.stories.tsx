import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryBtn } from '../components/atoms/PrimaryBtn';

// Storybookのメタデータを定義
const meta: Meta<typeof PrimaryBtn> = {
  title: 'Components/PrimaryBtn',
  component: PrimaryBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }, // onClick イベントのアクションを設定
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのストーリーを作成
export const Default: Story = {
  args: {
    children: 'ボタン',
  },
};

// 追加のカスタマイズされたストーリーも作成できます
export const WithDifferentText: Story = {
  args: {
    children: 'Sign In',
  },
};