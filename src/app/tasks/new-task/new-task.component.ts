import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  task = {
    title: '',
    summary: '',
    dueDate: '',
  };
  @Output() createTask = new EventEmitter<NewTask>();
  @Output() CancelTaskCreation = new EventEmitter();
  onCancelTaskCreation() {
    this.CancelTaskCreation.emit();
  }
  onCreateTask() {
    this.createTask.emit(this.task); // Emit the task object
  }
}
