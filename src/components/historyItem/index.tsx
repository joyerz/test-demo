import * as React from 'react';

import './index.less';

interface Props {
  startedAt: string;
  timeSpent: number;
  success: boolean;
}

export default (props: Props): JSX.Element => (
  <div styleName="history-item" data-testid="history-item">
    <span data-testid="startedAt">
      Started at:
      {' '}
      { props.startedAt }
    </span>
    <span data-testid="timeSpent">
      Time spent:
      {' '}
      { props.timeSpent }
      ms
    </span>
    <span data-testid="status">
      Status:
      {' '}
      { props.success ? 'Success' : 'Failure' }
    </span>
  </div>
);
