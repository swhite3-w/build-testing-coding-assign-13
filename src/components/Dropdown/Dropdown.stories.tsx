import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Alpha', value: 'alpha' },
  { label: 'Beta', value: 'beta' },
  { label: 'Gamma', value: 'gamma' },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  render: (args: any) => {
    const [val, setVal] = useState(args.value ?? '');
    return (
      <Dropdown {...args} options={options} value={val} onChange={setVal} />
    );
  },
  args: {
    label: 'Choose an option',
    backgroundColor: 'transparent',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled dropdown',
    options,
    backgroundColor: 'transparent',
    disabled: true,
  },
};
