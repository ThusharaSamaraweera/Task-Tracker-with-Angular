import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes: any = faTimes;

  constructor() {}

  ngOnInit(): void {}

  handleOnDelete() {
    this.onDeleteTask.emit(this.task);
  }

  onToggle() {
    this.onToggleReminder.emit(this.task);
  }
}
