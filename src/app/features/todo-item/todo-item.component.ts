import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import * as TaskActions from '../../store/Task/task.actions';
import { Task } from '../../store/Task/task.model';
import { todoSelector } from '../../store/Task/task.selector';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  imports: [CommonModule, FormsModule],
})
export class TodoItemComponent {
  @Input() task?: Task;
  todoInput?: string;
  selectedTask?: Task;
  editTodo: boolean = false;
  todoStatus: string = 'Not started' || 'In progress' || 'Finished';
  todos: Task[] = [];
  constructor(private store: Store, private taskService: TaskService) {}

  ngOnInit(): void {
    this.editTodo = !this.editTodo;
    if (this.task) this.todoStatus = this.task.status;
    this.todoInput = this.task?.title;
  }

  updateToggle(): void {
    this.editTodo = !this.editTodo;
  }

  updateTodo(): void {
    this.editTodo = !this.editTodo;
    if (this.task && this.todoStatus) {
      const updatedTask: Task = {
        id: this.task.id,
        title: this.todoInput,
        status: this.todoStatus,
      };

      this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));

      this.store.select(todoSelector).subscribe((todos) => {
        this.taskService.saveTasksToLocalStorage(todos);
      });
    }
  }

  deleteTodo(): void {
    this.editTodo = !this.editTodo;
    if (this.task) {
      const deletedTask: Task = {
        id: this.task.id,
        title: this.task.title,
        status: this.task.status,
      };

      this.store.dispatch(TaskActions.deleteTask({ task: deletedTask }));
      console.log('Deleted', deletedTask);
      this.store.select(todoSelector).subscribe((todos) => {
        this.taskService.saveTasksToLocalStorage(todos);
      });
    }
  }
}
