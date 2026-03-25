import { HeroImage } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    imageUrl: { control: 'text' },
  },
};

export const Default = {
  args: {
    disabled: false,
    backgroundColor: '#111',
    imageUrl: 'https://placehold.co/1200x600',
    title: 'Hero Title',
    subtitle: 'Hero subtitle text',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    backgroundColor: '#111',
    imageUrl: 'https://placehold.co/1200x600',
    title: 'Hero (Disabled)',
    subtitle: 'Disabled state',
  },
};
