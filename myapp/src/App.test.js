import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App page', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeInTheDocument();
  expect(getByTestId('App-header')).toBeInTheDocument();
});
