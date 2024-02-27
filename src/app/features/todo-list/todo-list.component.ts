import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import { Task } from '../../store/Task/task.model';
import { todoSelector } from '../../store/Task/task.selector';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoItemComponent, CommonModule, TodoInputComponent],
})
export class TodoListComponent implements OnInit {
  todos: Task[] = [];

  constructor(private store: Store, private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
    this.todos = this.taskService.loadTasksToLocalStorage();
  }

  getAllTasks() {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  }
}
