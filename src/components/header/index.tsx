import * as React from 'react';
import './index.less';

interface Props {
  navTo: (href: string) => void
}

export default (props: Props): JSX.Element => (
  <div styleName="header">

    <a onClick={() => props.navTo('/')}>Home</a>
    {' '}
    |
    {' '}
    <a onClick={() => props.navTo('/history')}>History</a>
  </div>

);
