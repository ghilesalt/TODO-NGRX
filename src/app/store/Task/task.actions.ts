import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ task: Task }>()
);
export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: Task }>()
);
export const advanceTaskStatus = createAction(
  '[Task] Advance Task Status',
  props<{ task: Task }>()
);

export const addTaskSuccess = createAction(
  '[Task] Add Task Success', // Type de l'action
  props<{ task: Task }>() // Propriétés de l'action
);

export const deleteTaskSuccess = createAction(
  '[Task] Delete Task Success', // Type de l'action
  props<{ task: Task }>() // Propriétés de l'action
);

export const updateTaskSuccess = createAction(
  '[Task] Update Task Success', // Type de l'action
  props<{ task: Task }>() // Propriétés de l'action
);

export const addTaskFailure = createAction(
  '[Task] Add Task Failure',
  props<{ error: any }>()
);

export const deleteTaskFailure = createAction(
  '[Task] Delete Task Failure',
  props<{ error: any }>()
);

export const updateTaskFailure = createAction(
  '[Task] Update Task Failure',
  props<{ error: any }>()
);

export const actions = [addTask, deleteTask, updateTask, advanceTaskStatus];
