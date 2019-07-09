import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { userService } from 'src/Services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users:string[] = [];

  constructor(private UserService:userService) {
  }

  ngOnInit(){
    this.users = this.UserService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.UserService.onSetToInactive(id)
  }
}
