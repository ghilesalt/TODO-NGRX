import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ task: Task }>());
export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());
export const advanceTaskStatus = createAction('[Task] Advance Task Status', props<{ task: Task }>());


export const actions = [addTask, deleteTask, updateTask, advanceTaskStatus];

// export function toggleTaskStatus(toggleTaskStatus: any, arg1: (state: import("../reducer/task.reducer").TaskState, { id }: any) => { tasks: { status: string; id: number; title: string; }[]; }): import("@ngrx/store").ReducerTypes<import("../reducer/task.reducer").TaskState, readonly import("@ngrx/store").ActionCreator[]> {
//   throw new Error('Function not implemented.');
// }

// export function changeTaskStatus(arg0: { id: number; status: "not started" | "in progress" | "finished"; }): any {
//   throw new Error('Function not implemented.');
// }

