import * as React from 'react';
import { navTo } from '@/routes/helper';
import './index.less';

export default (): JSX.Element => (
  <div styleName="header">

    <a onClick={() => navTo('/')}>Home</a>
    {' '}
    |
    {' '}
    <a onClick={() => navTo('/history')}>History</a>
  </div>

);
