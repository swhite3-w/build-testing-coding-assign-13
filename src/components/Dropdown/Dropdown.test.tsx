import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';
import { getBg } from '../testUtils';

describe('Dropdown', () => {
  const options = [{ label: 'A', value: 'a' }];

  test('is visible', () => {
    render(<Dropdown options={options} data-testid="dropdown-root" />);
    expect(screen.getByTestId('dropdown-root')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    const { rerender } = render(
      <Dropdown options={options} disabled={false} />
    );

    const select = screen.getByRole('combobox');
    const bgDefault = getBg(select);

    rerender(<Dropdown options={options} disabled={true} />);

    const selectDisabled = screen.getByRole('combobox');
    const bgDisabled = getBg(selectDisabled);

    expect(bgDisabled).not.toEqual(bgDefault);
  });
});
