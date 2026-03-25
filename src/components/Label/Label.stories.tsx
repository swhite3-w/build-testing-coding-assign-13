import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    text: 'Default Label',
    backgroundColor: 'transparent',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Disabled Label',
    backgroundColor: 'transparent',
    disabled: true,
  },
};
