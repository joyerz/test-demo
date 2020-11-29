import * as React from 'react';
import { useStateMachine } from 'little-state-machine';
import { updateState } from '@/store';
import { fetchGithub } from '@/store/github';

import Tree from '@components/tree';
import CallTimes from '@components/callTimes';

import './index.less';

const { useEffect } = React;

export default function (): JSX.Element {
  const { state, action } = useStateMachine(updateState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchGithub();
      action(res);
    };
    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [action]);

  console.log(state);

  return (
    <>
      <h1>Home Page</h1>
      <CallTimes history={state.history} />
      <Tree data={state.data} />
    </>
  );
}
