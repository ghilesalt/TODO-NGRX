import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Task } from '../store/Task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private cookieService: CookieService) {}

  saveTasksToLocalStorage(tasks: Task[]): boolean {
    try {
      // localStorage.clear();
      const existingTasks = this.loadTasksToLocalStorage();

      const newTasksWithIds = tasks.map((task, index) => ({
        ...task,
        id: existingTasks.length + index,
      }));

      const updatedTasks = [...existingTasks, ...newTasksWithIds];

      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      console.log('Tasks saved to local storage', updatedTasks);
      return true;
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
      return false;
    }
  }

  loadTasksToLocalStorage(): Task[] {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      try {
        // localStorage.clear();
        const tasks: Task[] = JSON.parse(tasksJson);
        console.log('Tasks loaded from local storage:', tasks);
        return tasks;
      } catch (error) {
        console.error('Error parsing tasks from local storage:', error);
        return [];
      }
    } else {
      console.log('No tasks found in local storage');
      return [];
    }
  }
}
