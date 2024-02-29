import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTask } from '../../store/Task/task.actions';
import { Task } from '../../store/Task/task.model';
import { selectTasks } from '../../store/Task/task.selector';

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
  todos$: Observable<Task[]>;

  constructor(private store: Store<{ tasks: Task[] }>) {
    this.todos$ = store.select('tasks');
  }

  ngOnInit(): void {
    this.todos$ = this.store.select(selectTasks);
  }

  addTask(): void {
    if (this.todoInput!.trim() !== '') {
      const newTask: Task = {
        title: this.todoInput!.trim(),
        status: 'Not started',
        id: Math.floor(Math.random() * 9000) + 1000,
      };

      this.store.dispatch(addTask({ task: newTask }));

      console.log('Task added:', newTask);
      this.todoInput = '';
    }
  }
}
