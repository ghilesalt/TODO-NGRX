import { Component, Input } from '@angular/core';
import { Task } from '../../store/Task/task.model';
import { addTask } from '../../store/Task/task.actions';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
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

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  }

  addTask(todoInput?: string): void {

    if(this.todos) {
      const newTask: Task = { title: todoInput, status: 'Not started', id: this.todos.length + 1};
      this.store.dispatch(addTask({ task: newTask }));
      console.log('Task added:', newTask);
    }
  }

}
