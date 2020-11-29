import * as React from 'react';

import Header from '@components/header';
import './index.less';

import { navTo } from '../../routes/helper';

interface Props {
  children: any
}

export default function (props: Props): JSX.Element {
  return (
    <div styleName="layout">
      <Header navTo={navTo} />
      <div styleName="page" data-testid="page">{props.children}</div>
    </div>
  );
}
