import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { AuthService } from '../../core/auth.service';
import { ParseUserRolePipe } from './parse-user-role.pipe';

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

  roles = ['Cashier', 'Admin'];

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
    this.newUserEmail = null;
    this.newUserPassword = null;
  }

  updateUser(id, role) {
    // Check if admin role has been selected
    let admin = false;
    if (role === 'Admin') {
      admin = true;
    }
    this.authService.updateUserRole(id, {admin: admin});
  }

  deleteUser() {

  }

}
