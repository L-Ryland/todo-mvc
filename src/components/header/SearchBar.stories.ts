import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta = {
  title: "Example/Header/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBarInstance: Story = {};