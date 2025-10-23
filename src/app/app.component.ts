import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  taskService = inject(TaskService);

  tasks = this.taskService.tasks;

  todoItems = computed(() => {
    const tasks = this.tasks();
    const filtered = tasks.filter(x => x.status == 'Todo');
    console.log("Filtered Todo Items:", filtered);
    return filtered
  });

  inProgressItems = computed(() => {
    const tasks = this.tasks();
    const filtered = tasks.filter(x => x.status == 'In Progress');
    console.log("Filtered In Progress Items:", filtered);
    return filtered;
  });

  completedItems = computed(() => {
    const tasks = this.tasks();
    const filtered = tasks.filter(x => x.status == 'Completed');
    console.log("Filtered Completed Items:", filtered);
    return filtered
  });
}
