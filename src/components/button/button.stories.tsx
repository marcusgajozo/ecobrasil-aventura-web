import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Componentes/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
    iconName: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["success", "destructive", "primary"],
      },
    },
    disabled: { control: "boolean" },
  },

  args: {
    children: "Button",
    onClick: () => console.log("Botão Clicado!"),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
