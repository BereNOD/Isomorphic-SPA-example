/* @flow strict */

import * as React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import Entry, { SERVER } from '/client/src/Entry.jsx';
import { version } from '/client/package.json';

type PropsType = {
  url: string
};

const Layout = ({
  url
}: PropsType) => (
  <html>
    <head>
      <title>Empty project</title>
      <meta charSet="utf-8" />
    </head>
    <body>
      <div id="root">
        <Router location={url} context={{}}>
          <Entry renderer={SERVER} />
        </Router>
      </div>
      <script src={`/runtime.js?version=${version}`} />
      <script src={`/vendors.js?version=${version}`} />
      <script src={`/main.js?version=${version}`} />
    </body>
  </html>
);

export default Layout;
