import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userService } from 'src/Services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private UserService:userService) {
  }

  onSetToActive(id: number) {
    this.UserService.onSetToActive(id);
  }
}
