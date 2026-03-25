import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  test('is visible', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByRole('button', { name: /test button/i })).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(<Button label="Disabled Button" disabled={true} />);
    const btn = screen.getByRole('button', { name: /disabled button/i });
    expect(btn).toHaveStyle('background: #bdbdbd');
  });
});
