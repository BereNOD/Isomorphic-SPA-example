/* @flow strict */

import * as React from 'react';
import { renderToStaticNodeStream } from 'react-dom/server';
import View from '/Modules/Render/View';

class RenderController {
  static render = ({ baseUrl }, res) => {
    res.write('<!DOCTYPE html>');
    renderToStaticNodeStream(<View url={baseUrl} />)
      .pipe(res);
  };
}

export default RenderController;
