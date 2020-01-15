import { Router } from 'express';
import _ from 'lodash';

import routes from '/client/src/routes.js';

import RenderController from '/Modules/Render/Controller/RenderController';

const router = Router();

_.forEach(routes, ({ params: { path } }) => {
  router.get(path, RenderController.render);
});

export default router;
