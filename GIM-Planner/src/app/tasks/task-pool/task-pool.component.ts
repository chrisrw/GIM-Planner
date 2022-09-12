import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-pool',
  templateUrl: './task-pool.component.html',
  styleUrls: ['./task-pool.component.css']
})
export class TaskPoolComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

}
