import 'jest';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import HistoryItem from '../index';

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
    const data = {
      startedAt: Date.now(),
      timeSpent: 32,
      success: true,
    };
    act(() => {
      render((
        <HistoryItem
          startedAt={data.startedAt}
          timeSpent={data.timeSpent}
          success={data.success}
        />), container);
    });
    expect(container.querySelector('[data-testid=startedAt]').textContent).toBe(`Started at: ${data.startedAt}`);
    expect(container.querySelector('[data-testid=timeSpent]').textContent).toBe(`Time spent: ${data.timeSpent}ms`);
    expect(container.querySelector('[data-testid=status]').textContent).toBe('Status: Success');
  });
});
