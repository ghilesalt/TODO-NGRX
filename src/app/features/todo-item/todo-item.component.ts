import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Task } from '../../store/Task/task.model';
import * as TaskActions from '../../store/Task/task.actions';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  imports: [CommonModule,FormsModule],
})
export class TodoItemComponent {
  @Input() task?: Task;
  todoInput?: string;
  selectedTask?: Task;
  editTodo: boolean = false;
  todoStatus: string = 'Not started' || 'In progress' || 'Finished';


  constructor(private store: Store, private taskService: TaskService) {}


  ngOnInit(): void {
    this.editTodo = !this.editTodo;
    if(this.task)
    this.todoStatus= this.task.status;
    this.todoInput = this.task?.title;

  }

  updateToggle(): void {
    this.editTodo = !this.editTodo;
  }

  updateTodo(): void {
    this.editTodo = !this.editTodo;
    if (this.task) {
      const updatedTask: Task = {
        id: this.task.id,
        title: this.todoInput,
        status: this.todoStatus,
      };
      this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));


    }
  }

  deleteTodo(): void {
    this.editTodo = !this.editTodo;
    if (this.task) {
      const deletedTask: Task = {
        id: this.task.id,
        title: this.todoInput,
        status: this.task.status,
      };
      this.store.dispatch(TaskActions.deleteTask({ task: deletedTask}));
    }
  }

  // addTask(taskName: string, taskState: string = 'not started'): void {
  //   if (!taskName) {
  //     return;
  //   }
  //   const newTask: Task = { title: taskName, status: taskState, id: Math.random() };
  //   this.store.dispatch(addTask({ task: newTask }));

  //   console.log('Task added:', newTask);

  // }

  // updateTask(task: Task): void {
  //   this.store.dispatch(updateTask({ id: task.id, task }));
  //   this.editTodo = false; // Fermez le mode d'édition après la mise à jour
  // }

  // deleteTask(id: number): void {
  //   this.store.dispatch(deleteTask({ id }));
  // }

  // advanceTaskStatus(id: number, newStatus: 'not started' | 'in progress' | 'finished'): void {
  //   this.store.dispatch(advanceTaskStatus({ id, newStatus }));
  // }
}
