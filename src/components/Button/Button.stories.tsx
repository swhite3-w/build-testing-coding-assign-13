import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Click Me',
    backgroundColor: '#1976d2',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    backgroundColor: '#1976d2',
    disabled: true,
  },
};
