import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../store/Task/task.model';
import { selectTasks } from '../../store/Task/task.selector';
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
  todos: Observable<Task[]>;

  constructor(private store: Store<{ tasks: Task[] }>) {
    this.todos = store.select('tasks');
  }

  ngOnInit(): void {
    this.todos = this.store.select(selectTasks);
  }
}
