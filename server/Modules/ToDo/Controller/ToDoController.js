/* @flow strict */

import ToDoModel from '/Modules/ToDo/Model/ToDoModel.js';

class ToDoController {
  static get = async (req: $Request, res: $Response, next: nextFunction): Promise<void> => {
    try {
      return res.json(await ToDoModel.get(+req.params.id));
    } catch (error) {
      return next(error);
    }
  };

  static getList = async (req: $Request, res: $Response, next: nextFunction): Promise<void> => {
    try {
      return res.json(await ToDoModel.getList());
    } catch (error) {
      return next(error);
    }
  };

  static create = async (req: $Request, res: $Response, next: nextFunction): Promise<void> => {
    try {
      return res.json(await ToDoModel.create());
    } catch (error) {
      return next(error);
    }
  };

  static update = async (req: $Request, res: $Response, next: nextFunction): Promise<void> => {
    try {
      return res.json(await ToDoModel.update());
    } catch (error) {
      return next(error);
    }
  };

  static delete = async (req: $Request, res: $Response, next: nextFunction): Promise<void> => {
    try {
      return res.json(await ToDoModel.delete());
    } catch (error) {
      return next(error);
    }
  };
}

export default ToDoController;
