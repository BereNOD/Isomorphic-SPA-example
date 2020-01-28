/* @flow strict */

import DBExec from '/DB';
import Error from '/ErrorHandler/Error.js';

export type RecordType = {
  id: null | number,
  name: string,
  position_id: ?number
};

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

  static create = async (record: RecordType): Promise<null> => {
    const [{ insertId }] = await DBExec('INSERT INTO work.worker (`name`) VALUES (?)', [record.name]);

    return {
      id: insertId,
      list: await ToDoModel.getList()
    };
  };

  static update = async (id: number, record: RecordType): Promise<null> => {
    await DBExec('UPDATE work.worker SET `name` = ? WHERE id = ?', [record.name, id]);

    return {
      list: await ToDoModel.getList()
    };
  };

  static delete = async (id: number): Promise<null> => {
    await DBExec('DELETE FROM work.worker WHERE worker.id = ?;', [id]);

    return {
      list: await ToDoModel.getList()
    };
  };
}

export default ToDoModel;
