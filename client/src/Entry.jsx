/* @flow strict */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
// import _ from 'lodash';

import routes from './routes';

type PropsType = {
  renderer: string
};

export const SERVER = 'server';
export const BROWSER = 'browser';
export const MetaContext = React.createContext({
  renderer: SERVER
});

const Entry = ({
  renderer,
  ...props
}: PropsType): React.Element<typeof Switch> => (
  <MetaContext.Provider
    value={{
      renderer
    }}
  >
    <Switch>
      {routes.map(({ Component, params = {} }, index): React.Element<typeof Route> => (
        <Route {...params} key={`Route-number-${index}`}>
          <Component {...props} />
        </Route>
      ))}
    </Switch>
  </MetaContext.Provider>
);

export default hot(Entry);
