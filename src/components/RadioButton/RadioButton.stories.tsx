import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  render: (args: any) => {
    const [checked, setChecked] = useState(false);
    return (
      <RadioButton
        {...args}
        checked={checked}
        onChange={setChecked}
        name="demo"
      />
    );
  },
  args: {
    label: 'Radio',
    backgroundColor: '#ffffff',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Radio',
    backgroundColor: '#ffffff',
    disabled: true,
    name: 'demo',
  },
};
