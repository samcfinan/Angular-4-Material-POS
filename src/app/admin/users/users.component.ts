import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  addUserActive = false;

  newUserEmail: string;
  newUserPassword: string;

  users;

  constructor(private db: DatabaseService, private authService: AuthService) {  }

  ngOnInit() {
    this.users = this.db.getUsers();
  }

  addUserToggle() {
    this.newUserEmail = null;
    this.newUserPassword = null;
    if (this.addUserActive === true) {
      this.addUserActive = false;
    } else {
      this.addUserActive = true;
    }
  }

  userSignup() {
    this.authService.signup(this.newUserEmail, this.newUserPassword);
  }

  updateUser(id, roles) {
    this.authService.updateUserRole(id, roles);
  }

  deleteUser() {

  }

}
