import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
  },
};

export const Default = {
  args: {
    text: "This is some text.",
    backgroundColor: "transparent",
    disabled: false,
    size: "md",
  },
};

export const Disabled = {
  args: {
    text: "This text is disabled.",
    backgroundColor: "transparent",
    disabled: true,
    size: "md",
  },
};