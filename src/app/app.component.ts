import { Component, OnInit } from '@angular/core';
import { userService } from 'src/Services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeUsers:string[] = [];
  inactiveUsers:string[] = [];

  constructor(private UserService:userService) {
  }

  ngOnInit(){
    this.activeUsers = this.UserService.activeUsers;
    this.inactiveUsers = this.UserService.inactiveUsers;
  }
}
