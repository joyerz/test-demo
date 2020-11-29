import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { StateMachineProvider } from 'little-state-machine';
import '@/store';
import Routes from '@/routes';

import './assets/styles/index.less';

function render() {
  const container: HTMLElement = document.querySelector('#app');
  ReactDOM.render(<StateMachineProvider><Routes /></StateMachineProvider>, container);
}

render();
