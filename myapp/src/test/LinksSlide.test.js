import React from 'react';
import { render } from '@testing-library/react';
import LinksSlide from '../components/LinksSlide';

test('renders AppBar', () => {
  const { getByTestId } = render(<LinksSlide />);
  expect(getByTestId('youtube-img')).toBeInTheDocument();
  expect(getByTestId('instagram-img')).toBeInTheDocument();
  // expect(getByTestId('link3')).toBeInTheDocument();
});