/* @flow strict */

import * as React from 'react';
import Suspense from './../components/Suspense.jsx';

const Title = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./../components/Title.jsx'));
  }, 5000);
}));

type PropsType = {};

const Home = ({}: PropsType) => (
  <Suspense fallback="Loading...">
    <Title>Home</Title>
  </Suspense>
);

export default Home;
