import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task.model';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  content!: string;
  day!: string;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const currentTime = new Date();
    const settingTime = new Date(this.day);

    if (!this.content) {
      alert('Please add a task')
      return
    }
    if(!this.day) {
      alert('Please add a day')
      return
    } else if(settingTime.getTime() <= currentTime.getTime()) {
      alert('Please add a valid day')
      return
    }

    const newTask = {
      content: this.content,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.content = '';
    this.day = '';
    this.reminder = false;
  }

}
