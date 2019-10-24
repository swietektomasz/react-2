import React from 'react';
import { render, act } from '@testing-library/react';
import TimerGame from '../TimerGame';

jest.useFakeTimers();

test('Starts the game and waits for game over', () => {
  const { getByText } = render(<TimerGame />);

  expect(getByText(/Starting the game!/));
  expect(setTimeout).toHaveBeenCalledTimes(1);
  act(() => {
    jest.runOnlyPendingTimers();
  });
  expect(getByText(/Game Over/));
});
