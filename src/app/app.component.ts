import { Component } from '@angular/core';
import { TodoListComponent } from "./features/todo-list/todo-list.component";
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/Task/task.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bnp-list';
}
