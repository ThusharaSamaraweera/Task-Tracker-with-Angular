import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes: any = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
