import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private uiService: UiService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(id: number) {
    this.taskService
      .deleteTask(id)
      .subscribe(
        () => (this.getTasks())
      );
  }

  onToggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => this.getTasks());
  }

  updateTask(task: Task) {
    console.log(task)

  }
}
