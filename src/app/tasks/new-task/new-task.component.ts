import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  // The old way of providing a service instance directly
  // private tasksService: TasksService;

  // Use Angular's dependency injection mechanism to inject the service instance
  constructor(private tasksService: TasksService) {
    // The old way of instantiating a service manually
    // This is not recommended as it bypasses Angular's DI system
    // this.tasksService = new TasksService();
  }

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
