import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { TaskStatus } from '../../types/TaskStatus';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
    }),
    status: new FormControl('Todo', {
      nonNullable: true,
    }),
  });
  taskService = inject(TaskService);

  onSubmit() {
    console.log("app-task-form onSubmit called");
    const { task, status } = this.taskForm.getRawValue();
    this.taskService.addTask(task, status as TaskStatus);
    console.log("addded task:", task, "with status:", status);
    this.taskForm.reset();
  }
}
