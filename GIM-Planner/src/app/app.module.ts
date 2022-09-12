import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app/app.component';
import { HeaderComponent } from '../app/header/header.component';
import { TaskPoolComponent } from './tasks/task-pool/task-pool.component';
import { CurrentTasksComponent } from './tasks/current-tasks/current-tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TaskCreateComponent } from './tasks/task-create/task-create.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskPoolComponent,
    CurrentTasksComponent,
    TaskListComponent,
    TaskCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
