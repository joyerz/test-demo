import * as React from 'react';

import Header from '@components/header';
import './index.less';

interface Props {
  children: any
}

export default function (props: Props): JSX.Element {
  return (
    <div styleName="layout">
      <Header />
      <div styleName="page" data-testid="page">{props.children}</div>
    </div>
  );
}
