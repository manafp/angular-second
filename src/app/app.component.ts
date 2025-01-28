import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DUMMY_USERS } from './dummy-users';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser(){
      return this.users.find((user)=>user.id === this.selectedUserId);
  }
  onSelect(id:string){
      this.selectedUserId = id;
  }
}
