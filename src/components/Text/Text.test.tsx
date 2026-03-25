import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text', () => {
  test('is visible', () => {
    render(<Text text="Visible text" />);
    expect(screen.getByTestId('text')).toBeVisible();
    expect(screen.getByText(/visible text/i)).toBeInTheDocument();
  });

  test('background color changes when disabled', () => {
    render(<Text text="Disabled text" disabled={true} />);
    const el = screen.getByTestId('text');
    expect(el).toHaveStyle('background: #e0e0e0');
  });
});
