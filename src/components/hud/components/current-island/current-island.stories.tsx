import type { Meta, StoryObj } from "@storybook/react";

import { CurrentIsland } from ".";

const meta: Meta<typeof CurrentIsland> = {
  title: "Componentes/HUD(Heads-Up Display)/CurrentIsland",
  component: CurrentIsland,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
