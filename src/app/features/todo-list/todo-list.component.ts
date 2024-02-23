import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';
import { Task } from '../../store/Task/task.model';
import { Store, StoreModule, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  todoSelector } from '../../store/Task/task.selector';
import { addTask } from '../../store/Task/task.actions';
import { taskReducer } from '../../store/Task/task.reducer';
import { TodoInputComponent } from '../todo-input/todo-input.component';


@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
    imports: [TodoItemComponent,CommonModule,TodoInputComponent,]
})
export class TodoListComponent implements OnInit{
  todos: Task[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.getAllTasks()
  }

  getAllTasks(){

  this.store.select(todoSelector).subscribe((state) => this.todos = state);

  }

  // addTask(taskName: string, taskState: string = 'not started'): void {
  //   if (!taskName) {
  //     return;
  //   }
  //   const newTask: Task = { title: taskName, status: taskState, id: Math.random() };
  //   this.store.dispatch(addTask({ task: newTask }));

  //   console.log('Task added:', newTask);

  // }
}
