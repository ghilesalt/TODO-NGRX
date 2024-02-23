import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListComponent } from "./features/todo-list/todo-list.component";
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './store/Task/task.reducer';
import { TodoInputComponent } from './features/todo-input/todo-input.component';
import { TodoItemComponent } from './features/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ "tasks": taskReducer }),
    TodoListComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
