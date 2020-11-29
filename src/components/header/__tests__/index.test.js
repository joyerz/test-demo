import 'jest';
import * as React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from '../index';

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

describe('test header', () => {
  it('Header have two links', () => {
    act(() => {
      render(<Header />, container);
    });
    expect(container.querySelectorAll('a').length).toBe(2);

    const HomeNav = container.querySelectorAll('a')[0];
    const HistoryNav = container.querySelectorAll('a')[1];
    expect(HomeNav.textContent).toBe('Home');
    expect(HistoryNav.textContent).toBe('History');
  });
});
