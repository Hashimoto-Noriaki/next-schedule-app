import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Example/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => alert(`Submitted data: ${JSON.stringify(data)}`),
  },
};
