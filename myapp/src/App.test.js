import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App page', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('App')).toBeInTheDocument();
  expect(getByTestId('App-header')).toBeInTheDocument();
  expect(getByTestId('products-info')).toBeInTheDocument();

  expect(getByTestId('product1')).toBeInTheDocument();
  expect(getByTestId('product1-description')).toBeInTheDocument();
  expect(getByTestId('product1-button')).toBeInTheDocument();
  
  expect(getByTestId('product2')).toBeInTheDocument();
  expect(getByTestId('product2-description')).toBeInTheDocument();
  expect(getByTestId('product2-button')).toBeInTheDocument();

  expect(getByTestId('shop-cart')).toBeInTheDocument();
  expect(getByTestId('ShoppingCartRoundedIcon')).toBeInTheDocument();

  expect(getByTestId('ContactInfo')).toBeInTheDocument();
});
