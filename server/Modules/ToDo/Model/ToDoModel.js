/* @flow strict */

import DBExec from '/DB';
import Error from '/ErrorHandler/Error.js';

class ToDoModel {
  static get = async (id: number): Promise<null> => {
    const [[row]] = await DBExec('SELECT * FROM work.worker WHERE worker.id = ?;', [id]);

    if (!row) {
      throw new Error('Not found.', 404);
    }

    return row;
  };

  static getList = async (): Promise<null> => {
    const [rows] = await DBExec('SELECT * FROM work.worker;');

    return rows;
  };

  static create = async (): Promise<null> => {
    return null;
  };

  static update = async (): Promise<null> => {
    return null;
  };

  static delete = async (): Promise<null> => {
    return null;
  };
}

export default ToDoModel;
