import { Img } from "./Img";

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    src: { control: "text" },
    alt: { control: "text" },
  },
};

export const Default = {
  args: {
    disabled: false,
    backgroundColor: "transparent",
    src: "https://placehold.co/800x400",
    alt: "placeholder",
  },
};

export const Disabled = {
  args: {
    disabled: true,
    backgroundColor: "transparent",
    src: "https://placehold.co/800x400",
    alt: "placeholder",
  },
};