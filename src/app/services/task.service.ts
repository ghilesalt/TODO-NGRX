import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Task } from '../store/Task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private cookieService: CookieService) {}

  saveTasksToLocalStorage(tasks: Task[]): void {
    try {
      localStorage.clear();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to local storage:', error);
    }
  }

  loadTasksToLocalStorage(): Task[] {
    try {
      localStorage.clear();
      const tasksJson = localStorage.getItem('tasks');
      if (tasksJson) {
        const tasks: Task[] = JSON.parse(tasksJson);
        console.log('Tasks loaded from local storage:', tasks);
        return tasks;
      } else {
        console.log('No tasks found in local storage');
        return [];
      }
    } catch (error) {
      console.error('Error parsing tasks from local storage:', error);
      return [];
    }
  }

  deleteTasksFromLocalStorage(tasks: Task[]): void {
    try {
      const existingTasks = this.loadTasksToLocalStorage();
      const updatedTasks = existingTasks.filter(
        (existingTask) => !tasks.some((task) => task.id === existingTask.id)
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      console.log('Tasks deleted from local storage');
    } catch (error) {
      console.error('Error deleting tasks from local storage:', error);
    }
  }

  updateTasksInLocalStorage(updatedTasks: Task[]): void {
    try {
      const existingTasks = this.loadTasksToLocalStorage();
      const mergedTasks = existingTasks.map((existingTask) => {
        const updatedTask = updatedTasks.find(
          (task) => task.id === existingTask.id
        );
        return updatedTask ? updatedTask : existingTask;
      });
      localStorage.setItem('tasks', JSON.stringify(mergedTasks));
      console.log('Tasks updated in local storage');
    } catch (error) {
      console.error('Error updating tasks in local storage:', error);
    }
  }
}
