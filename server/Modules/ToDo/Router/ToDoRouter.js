/* @flow strict */

import { Router } from 'express';

import ToDoController from '/Modules/ToDo/Controller/ToDoController';

const router = Router();

router
  .get('/', ToDoController.getList)
  .get('/:id', ToDoController.get)
  .post('/', ToDoController.create)
  .put('/:id', ToDoController.update)
  .delete('/:id', ToDoController.delete);

export default router;
