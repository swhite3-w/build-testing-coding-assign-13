import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UI Component Library Demo', () => {
  render(<App />);
  const headingElement = screen.getByText(/ui component library demo/i);
  expect(headingElement).toBeInTheDocument();
});
