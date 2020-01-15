import Express from 'express';
import HTTP from 'http';
// import JSX from 'express-react-views';

import Log from '/utils/Log';
import normalizePort from '/utils/normalizePort';
import onError from '/utils/onError';
import onListening from '/utils/onListening';

import Middleware from '/Middleware';
import Router from '/Router';
import ErrorHandler from '/ErrorHandler';

Log('Server starting...');

export const App = Express();
const port = normalizePort(process.env.PORT);

App.set('port', port);
// App.set('views', `${__dirname}/Modules/Render/View`);
// App.set('view engine', 'jsx');
// App.engine('jsx', JSX.createEngine({ transformViews: false }));

HTTP
  .createServer(App)
  .on('error', onError)
  .on('listening', onListening)
  .listen(port);


Middleware(App);
Router(App);
ErrorHandler(App);

Log('Server started.');

export default App;
