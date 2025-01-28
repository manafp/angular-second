import { Component, inject, Input, input, OnInit } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TaskService } from '../services/tasks.services';
import { Task } from '../types/tasks-response.type';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input() selectedUser!: User;

  private readonly taskService = inject(TaskService);
  tasks: Task[] = [];
  isAddingTask = false;
  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id);
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
    // let task = {
    //   id: 't4',
    //   userId: this.selectedUser?.id,
    //   title: 'Learn React',
    //   summary:
    //     'Understand the fundamentals of React and build reusable components.',
    //   dueDate: '2025-06-15',
    // };

    // this.tasks.push(task);
  }

  onCancelTask() {
    this.isAddingTask = false;
  }
  onAddTask(task: NewTask) {
    let newTask = {
      id: new Date().getTime().toString(),
      userId: this.selectedUser?.id,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    };
    this.tasks.unshift(newTask);
    this.isAddingTask = false;
  }
}
