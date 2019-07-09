import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { userService } from 'src/Services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users:string[] = [];

  constructor(private UserService:userService) {
  }
  
  ngOnInit(){
    this.users = this.UserService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.UserService.onSetToActive(id);
  }
}
