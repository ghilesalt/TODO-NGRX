export interface Task {
  id: number;
  title?: string;
  status: string;
}


export let todos: Task[] = [];
