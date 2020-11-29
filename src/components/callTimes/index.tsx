import * as React from 'react';

import './index.less';

interface HistoryItem {
  startedAt: string;
  timeSpent: number;
  success: boolean,
}
interface Props {
  history: HistoryItem[]
}

export default function CallTimes(props: Props): JSX.Element {
  const { history } = props;
  const successCounter = history.filter((item) => item.success).length;
  return (
    <div styleName="record">
      Calls:
      {' '}
      <span data-testid="calls">{history.length}</span>
      {' '}
      times
      {', '}
      Success:
      {' '}
      <span data-testid="successCounter">{successCounter}</span>
      {' '}
      times
    </div>
  );
}
