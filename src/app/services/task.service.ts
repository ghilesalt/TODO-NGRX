// task.service.ts
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskState } from '../store/Task/task.reducer';
import { Task } from '../store/Task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private store: Store<TaskState>) { }

  // Méthode pour sauvegarder les tâches dans le localStorage
  saveTasksToLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Méthode pour charger les tâches depuis le localStorage
  loadTasksFromLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem('tasks');
    return tasksJson ? JSON.parse(tasksJson) : [];
  }
}
