import 'jest';
import * as React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Layout from '../index';

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

describe('test layout', () => {
  it('Layout render children correctly', () => {
    const Child = () => (<div>Page</div>);
    act(() => {
      render(<Layout><Child /></Layout>, container);
    });

    expect(container.querySelector('[data-testid=page]').textContent).toBe('Page');
  });
});
