import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// import { TasksService } from './app/tasks/tasks.service';

/*
bootstrapApplication(AppComponent, {
  providers: [TasksService],
}).catch((err) => console.error(err)); // Note: Including TasksService here adds it to the bundle during application initialization. This might not be ideal if TasksService is not needed immediately when the application starts.
*/

bootstrapApplication(AppComponent).catch((err) => console.error(err)); // Bootstrap the application without TasksService in the initial bundle.
