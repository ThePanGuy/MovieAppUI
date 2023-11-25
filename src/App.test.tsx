import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesPage from "./components/MoviesPage";

test('renders learn react link', () => {
  render(<MoviesPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
