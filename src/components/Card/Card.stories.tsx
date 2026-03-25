import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    title: "Card Title",
    body: "Card body text",
    backgroundColor: "#ffffff",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    body: "Disabled state",
    backgroundColor: "#ffffff",
    disabled: true,
  },
};