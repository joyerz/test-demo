import * as React from 'react';
import { useStateMachine } from 'little-state-machine';

import CallTimes from '@components/callTimes';
import HistoryItem from '@components/historyItem';

import './index.less';

export default function ():JSX.Element {
  const { state } = useStateMachine();
  return (
    <>
      <h1>History Page</h1>

      <CallTimes history={state.history} />

      { state.history && state.history.reverse().map((item) => (
        <HistoryItem
          key={item.startedAt}
          startedAt={item.startedAt}
          timeSpent={item.timeSpent}
          success={item.success}
        />
      ))}
    </>
  );
}
