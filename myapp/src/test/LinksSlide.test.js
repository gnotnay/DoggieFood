import React from 'react';
import { render } from '@testing-library/react';
import LinksSlide from '../components/LinksSlide';

test('renders AppBar', () => {
  const { getByTestId } = render(<LinksSlide />);
  expect(getByTestId('link1')).toBeInTheDocument();
  expect(getByTestId('link2')).toBeInTheDocument();
  expect(getByTestId('link3')).toBeInTheDocument();
});