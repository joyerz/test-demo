import 'jest';
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Tree from '../index';

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
      render(<Tree />, container);
    });
    expect(container.querySelector('tree')).toBe(null);

    const data = {
      api_point_1: 'api_link_1',
      api_point_2: 'api_link_2',
      api_point_3: 'api_link_3',
    };
    act(() => {
      render(<Tree data={data} />, container);
    });
    const items = container.querySelectorAll('li');
    expect(items.length).toBe(3);

    expect(items[0].querySelector('span').textContent).toBe('api_point_1');
    expect(items[0].querySelectorAll('span')[1].textContent).toBe('api_link_1');

    expect(items[1].querySelector('span').textContent).toBe('api_point_2');
    expect(items[1].querySelectorAll('span')[1].textContent).toBe('api_link_2');

    expect(items[2].querySelector('span').textContent).toBe('api_point_3');
    expect(items[2].querySelectorAll('span')[1].textContent).toBe('api_link_3');
  });
});
