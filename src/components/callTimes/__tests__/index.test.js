import 'jest';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CallTimes from '../index';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('test Tree component render', () => {
  it('test Tree component render', () => {
    const history = [
      {
        startedAt: Date.now() - 1000,
        timeSpent: 100,
        success: true,
      },
      {
        startedAt: Date.now(),
        timeSpent: 100,
        success: false,
      },
    ];
    act(() => {
      render(<CallTimes history={history} />, container);
    });
    expect(container.querySelector('[data-testid=calls]').textContent).toBe('2');
    expect(container.querySelector('[data-testid=successCounter]').textContent).toBe('1');
  });
});
