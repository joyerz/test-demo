import * as React from 'react';
import { navTo } from '@/routes/helper';

export default function ():JSX.Element {
  return (
    <div>
      <h1>History Page</h1>

      <a onClick={() => navTo('/')}>Home</a>
      <a onClick={() => navTo('/history')}>History</a>
    </div>
  );
}
