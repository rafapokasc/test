import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/App';

test('renders marmita options', () => {
  const { getByText } = render(<App />);
  expect(getByText('Marmita P')).toBeTruthy();
  expect(getByText('Marmita M')).toBeTruthy();
  expect(getByText('Marmita G')).toBeTruthy();
});
