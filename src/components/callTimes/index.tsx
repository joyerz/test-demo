import * as React from 'react';

import './index.less';

interface Props {
  number: number;
}

export default (props: Props): JSX.Element => (
  <div styleName="record" data-testid="record">
    Calls:
    {' '}
    {props.number}
  </div>
);
