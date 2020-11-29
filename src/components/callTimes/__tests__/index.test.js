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
    act(() => {
      render(<CallTimes number={3} />, container);
    });
    expect(container.textContent).toBe('Calls: 3');
  });
});
