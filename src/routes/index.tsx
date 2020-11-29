import * as React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { setHistory } from '@/routes/helper';

import Layout from '@components/layout';
import Home from '@pages/home';

const History = React.lazy(() => import('@/pages/history'));

export default function Routes() {
  const { useEffect, createRef, Suspense } = React;
  const router: any = createRef();

  useEffect(() => {
    setHistory(router.current.history);
  });

  return (
    <Router ref={router}>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/history" component={History} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}
