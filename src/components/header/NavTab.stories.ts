import { Meta, StoryObj } from "@storybook/react";
import NavTab from "./NavTab";

const meta = {
  title: "Example/Header/NavTab",
  component: NavTab,
  tags: ["autodocs"],
} satisfies Meta<typeof NavTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavTabInstance: Story = {
  args: {
    children: "Online Experiences"
  }
};

export const ActiveNavTab: Story = {
  args: {
    children: "Stays",
    active: true,
  }
}
