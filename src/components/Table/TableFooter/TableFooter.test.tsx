import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from '../Table';
import { TableFooter } from './TableFooter';

describe('TableFooter', () => {
  test('is visible', () => {
    render(
      <Table>
        <TableFooter>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </Table>
    );
    expect(screen.getByTestId('table-footer')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(
      <Table>
        <TableFooter disabled={true}>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </Table>
    );
    expect(screen.getByTestId('table-footer')).toHaveStyle(
      'background: #d6d6d6'
    );
  });
});
