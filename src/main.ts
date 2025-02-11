import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';

export const TasksSeviceToken = new InjectionToken<TasksService>(
  'task-service-token'
);

bootstrapApplication(AppComponent, {
  providers: [{ provide: TasksSeviceToken, useClass: TasksService }],
}).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
