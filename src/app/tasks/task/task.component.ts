import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task?: Task;
  @Output() completeTask = new EventEmitter<string>();
  onTaskComplete() {
    this.completeTask.emit(this.task?.id);
  }
}
