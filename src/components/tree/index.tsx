import * as React from 'react';
import './index.less';

interface Props {
  data?: {
    [name: string]: string;
  }
}

export default function Tree(props: Props): JSX.Element {
  const { data } = props;
  if (!data) return null;

  return (
    <ul styleName="tree" data-testid="tree">
      {Object.keys(data).map((key) => (
        <li key={key}>
          <span styleName="key">
            {key}
          </span>
          <span styleName="value">
            {data[key]}
          </span>
        </li>
      ))}
    </ul>
  );
}

Tree.defaultProps = {
  data: null,
};
