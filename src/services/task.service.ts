import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';
import { TaskStatus } from '../app/types/TaskStatus';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks = signal<TaskItem[]>([])

  addTask(task: string, status: TaskStatus) {
    this.tasks.update((previousState) => {
      return [...previousState, { task, status }];
    });
  }
}
