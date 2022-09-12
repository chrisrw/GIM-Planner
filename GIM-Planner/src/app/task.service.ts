import { Injectable } from '@angular/core';
import {Task} from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    console.log(TASKS);
    return TASKS;
  }

}
