import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { Task, todos } from './task.model';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  todos,
  on(TaskActions.addTask, (state, { task }) => [...state, task]),
  on(TaskActions.deleteTask, (state, { task }) =>
    state.filter((t) => t.id !== task.id)
  ),
  on(TaskActions.updateTask, (state, { task }) =>
    state.map((t) => (t.id === task.id ? task : t))
  ),
  on(TaskActions.advanceTaskStatus, (state, { task }) =>
    state.map((t) =>
      t.id === task.id ? { ...t, status: nextStatus(t.status) } : t
    )
  )
);
function nextStatus(status: string): any {
  throw new Error('Function not implemented.');
}
