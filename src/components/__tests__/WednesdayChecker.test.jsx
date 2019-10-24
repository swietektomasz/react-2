import React from 'react';
import { render } from '@testing-library/react';

import WednesdayChecker from '../WednesdayChecker';


test('renders the checker when its not a Wednesday', () => {
  jest.spyOn(Date.prototype, 'getDay').mockImplementation(() => 4);

  const { getByText } = render(<WednesdayChecker />);

  expect(getByText(/Not a Wednesday/));
});

test('renders the checker when it is a Wednesday', () => {
  jest.spyOn(Date.prototype, 'getDay').mockImplementation(() => 3);

  const { getByText } = render(<WednesdayChecker />);

  expect(getByText(/Yes, it is a Wednesday/));
});
