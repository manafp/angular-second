import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask, Task } from './task/task.model';
const dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() selectedUser!: User;

  tasks = dummyTasks;
  isAddingTask = false;
  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUser?.id);
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
