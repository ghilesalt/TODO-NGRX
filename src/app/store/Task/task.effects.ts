import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, mergeMap } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import * as TaskActions from './task.actions';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap(({ task }) => {
        this.taskService.saveTasksToLocalStorage([task]);
        return of(TaskActions.addTaskSuccess({ task }));
      }),
      catchError((error) => of(TaskActions.addTaskFailure({ error })))
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap(({ task }) => {
        const tasks = [task];
        this.taskService.deleteTasksFromLocalStorage(tasks);
        return of(TaskActions.deleteTaskSuccess({ task }));
      }),
      catchError((error) => of(TaskActions.deleteTaskFailure({ error })))
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.updateTask),
      mergeMap(({ task }) => {
        const tasks = [task];
        this.taskService.updateTasksInLocalStorage(tasks);
        return of(TaskActions.updateTaskSuccess({ task }));
      }),
      catchError((error) => of(TaskActions.updateTaskFailure({ error })))
    )
  );

  addTaskSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTaskSuccess),
      filter(() => false) // Ignore this action
    )
  );

  deleteTaskSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTaskSuccess),
      filter(() => false)
    )
  );

  updateTaskSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.updateTaskSuccess),
      filter(() => false)
    )
  );
}
