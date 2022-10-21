import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task.model';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  content!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    const currentTime = new Date();
    const settingTime = new Date(this.day);

    if (!this.content) {
      alert('Please add a task');
      return;
    }
    if (!this.day) {
      alert('Please add a day & time');
      return;
    } else if (settingTime.getTime() <= currentTime.getTime()) {
      alert('Please add a future day & time');
      return;
    }

    const newTask = {
      content: this.content,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.content = '';
    this.day = '';
    this.reminder = false;
  }
}
