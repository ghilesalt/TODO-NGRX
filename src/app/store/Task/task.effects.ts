import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import { Task } from './task.model';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private store: Store<{ tasks: Task[] }>
  ) {}
}
