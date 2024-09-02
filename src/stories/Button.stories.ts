import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    icon: {
      control: {
        type: "select",
        options: ["plus", "minus"],
      },
    },
    width: { control: "text" }, // 横幅をコントロールできるようにする
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

// デフォルトの青色ボタン
export const Default: Story = {
  args: {
    label: "Button",
    primary: true,
    backgroundColor: "blue",
  },
};

// 青色のプラスボタン
export const BluePlusButton: Story = {
  args: {
    label: "",
    primary: true,
    backgroundColor: "blue",
    icon: "plus",
  },
};

// 青色のマイナスボタン
export const BlueMinusButton: Story = {
  args: {
    label: "",
    primary: true,
    backgroundColor: "blue",
    icon: "minus",
  },
};

// 赤色のボタン
export const RedButton: Story = {
  args: {
    label: "削除",
    primary: true,
    backgroundColor: "red",
  },
};

// 横幅が広い青いボタンのストーリー
export const WideBlueButton: Story = {
  args: {
    label: "ボタン",
    primary: true,
    backgroundColor: "blue",
    width: "200%",
  },
};
