/* @flow strict */

import MySQL from 'mysql2/promise';
import Promise from 'bluebird';

const DBExec = async (sql: string, args: Array<string | number>): Promise<[[], []]> => {
  const connection = await MySQL
    .createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'work',
      Promise
    });

  return connection.execute(sql, args);
};

export default DBExec;
