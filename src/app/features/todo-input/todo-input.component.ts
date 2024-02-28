import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import { addTask } from '../../store/Task/task.actions';
import { Task } from '../../store/Task/task.model';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css',
})
export class TodoInputComponent {
  @Input() task?: Task;
  todoInput?: string;
  todos: Task[] = [];

  constructor(private store: Store, private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask(todoInput?: string): void {
    if (todoInput) {
      // Créer une nouvelle tâche
      const newTask: Task = {
        title: todoInput,
        status: 'Not started',
        id: this.todos.length, // Incrémenter l'ID de la nouvelle tâche
      };

      // Charger les tâches existantes depuis le stockage local
      const existingTasks = this.taskService.loadTasksToLocalStorage();

      // Ajouter la nouvelle tâche à la liste existante
      const updatedTasks = [...existingTasks, newTask];

      // Sauvegarder la liste mise à jour dans le stockage local
      this.taskService.saveTasksToLocalStorage(updatedTasks);

      // Mettre à jour la liste dans la mémoire de l'application
      this.todos = updatedTasks;

      // Dispatch de l'action pour ajouter la tâche
      this.store.dispatch(addTask({ task: newTask }));

      console.log('Task added:', newTask);
    }
  }
}
