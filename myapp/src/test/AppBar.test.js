import React from 'react';
import { render } from '@testing-library/react';
import AppBar from '../components/AppBar';

test('renders AppBar', () => {
  const { getByTestId } = render(<AppBar />);
  expect(getByTestId('AppBar')).toBeInTheDocument();
  expect(getByTestId('logo-img')).toBeInTheDocument();
});