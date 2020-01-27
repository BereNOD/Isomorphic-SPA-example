/* @flow strict */

import Log from '/utils/Log';
import skipAsyncOnly from '/Middleware/skipAsyncOnly.js';

import Render from '/Modules/Render/Router';
import ToDoRouter from '/Modules/ToDo/Router/ToDoRouter.js';

const Router = (App: Express) => {
  App.use('/to-do', skipAsyncOnly(ToDoRouter));
  App.use('/', Render);

  Log('Router was bind.');
};

export default Router;
