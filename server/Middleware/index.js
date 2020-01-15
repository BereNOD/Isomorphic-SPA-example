import Log from '/utils/Log';

import Express from 'express';
import Path from 'path';
import cookieParser from 'cookie-parser';
import Morgan from 'morgan';

const AssetsFolder = Path.join(__dirname, '..', '..', 'client', 'dist');

const Middleware = (App) => {
  App.use(Morgan('dev'));
  App.use(Express.json());
  App.use(Express.urlencoded({
    extended: false
  }));
  App.use(cookieParser());
  App.use(Express.static(AssetsFolder));

  Log('Middleware was bind.');
};

export default Middleware;
