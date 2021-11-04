import React from 'react';
import { render, screen } from '@testing-library/react';
import Clock from './Clock';

describe('Clock', () => {
  beforeEach(() => render(<Clock />));

  it('should display current time', () => {
    const clock = screen.getByTestId('time');

    const currentTime = new Date().toLocaleTimeString();
    const clockTime = clock.textContent.toString();

    expect(clockTime).toMatch(currentTime);
  });

  it("should stop updating time when page isn't visible", () => {
    const clock = screen.getByTestId('time');
    const value1 = clock.textContent;

    Object.defineProperty(document, 'hidden', {
      configurable: true,
      get: () => true,
    });

    jest.setTimeout(4000);
    const value2 = clock.textContent;

    expect(value1).toMatch(value2);
  });
});
