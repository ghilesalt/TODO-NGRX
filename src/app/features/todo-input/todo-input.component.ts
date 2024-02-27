import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import { addTask } from '../../store/Task/task.actions';
import { Task } from '../../store/Task/task.model';
import { todoSelector } from '../../store/Task/task.selector';

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

  ngOnInit(): void {
    const data = this.store
      .select(todoSelector)
      .subscribe((state) => (this.todos = state));
  }

  addTask(todoInput?: string): void {
    if (todoInput) {
      const newTask: Task = {
        title: todoInput,
        status: 'Not started',
        id: this.todos.length,
      };

      const updatedTasks = [newTask];

      this.taskService.saveTasksToLocalStorage(updatedTasks);

      this.todos = updatedTasks;

      this.store.dispatch(addTask({ task: newTask }));

      console.log('Task added:', newTask);
    }
  }
}
