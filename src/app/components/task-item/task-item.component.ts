import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { faTimes, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() fillUpdateForm: EventEmitter<Task> = new EventEmitter();

  faTimes: any = faTimes;
  faPenToSquare: any = faPenToSquare;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  handleOnDelete() {
    this.onDeleteTask.emit(this.task);
  }

  onToggle() {
    this.onToggleReminder.emit(this.task);
  }

  handleOnClickUpdateTask() {
    this.uiService.toggleAddTaskForm()
    this.fillUpdateForm.emit(this.task)
  }
}
