import { Meta, StoryObj } from "@storybook/react";
import RegionSelector from "./RegionSelector";

const meta = {
  title: "Example/Components/RegionSelector",
  component: RegionSelector,
  tags: ["autodocs"],
} satisfies Meta<typeof RegionSelector>

export default meta;
type Story = StoryObj<typeof meta>;

export const _RegionSelector: Story = {};
