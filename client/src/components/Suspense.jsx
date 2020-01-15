/* @flow strict */

import * as React from 'react';
import { MetaContext, BROWSER } from './../Entry.jsx';

type PropsType = {
  children: React.Node
};

const Home = ({
  children,
  ...props
}: PropsType) => (
  <MetaContext.Consumer>
    {({ renderer }) => renderer === BROWSER ? (
      <React.Suspense {...props}>
        {children}
      </React.Suspense>
    ) : null}
  </MetaContext.Consumer>
);

export default Home;
