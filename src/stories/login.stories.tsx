import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Login } from '../pages/login';

// Storybookのメタデータを定義
const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのストーリーを作成
export const Default: Story = {};

// 追加のカスタマイズされたストーリーも作成
export const WithPrefilledFields: Story = {
  args: {
    // もし初期状態や特定の挙動をテストしたい場合、ここにargsを指定します。
  },
};