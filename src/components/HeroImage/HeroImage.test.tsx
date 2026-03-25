import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';
import { getBg } from '../testUtils';

describe('HeroImage', () => {
  test('is visible', () => {
    render(
      <HeroImage
        imageUrl="https://placehold.co/1200x600"
        data-testid="hero-root"
      />
    );
    expect(screen.getByTestId('hero-root')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(
      <HeroImage
        imageUrl="https://placehold.co/1200x600"
        disabled={false}
        data-testid="hero-root"
      />
    );
    const bgDefault = getBg(screen.getByTestId('hero-root'));

    rerender(
      <HeroImage
        imageUrl="https://placehold.co/1200x600"
        disabled={true}
        data-testid="hero-root"
      />
    );
    const bgDisabled = getBg(screen.getByTestId('hero-root'));

    expect(bgDisabled).not.toEqual(bgDefault);
  });
});
