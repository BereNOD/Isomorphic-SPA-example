import Log from '/utils/Log';

import Render from '/Modules/Render/Router';

const Router = App => {
  App.use('*', Render);

  Log('Router was bind.');
};

export default Router;
