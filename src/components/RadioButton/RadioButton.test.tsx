import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';
import { getBg } from '../testUtils';

describe('RadioButton', () => {
  test('is visible', () => {
    render(<RadioButton name="x" label="Radio" data-testid="radio-root" />);
    expect(screen.getByTestId('radio-root')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(
      <RadioButton name="x" disabled={false} data-testid="radio-root" />
    );
    const bgDefault = getBg(screen.getByTestId('radio-root'));

    rerender(<RadioButton name="x" disabled={true} data-testid="radio-root" />);
    const bgDisabled = getBg(screen.getByTestId('radio-root'));

    expect(bgDisabled).not.toEqual(bgDefault);
  });
});
