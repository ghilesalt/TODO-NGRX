import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Task } from './task.model';

export const todoSelector = createSelector(
  createFeatureSelector('tasks'),
  (state: Task[]) => state
);
