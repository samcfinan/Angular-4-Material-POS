import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  guestLogin() {
    this.auth.anonymousLogin();
  }

  userLogin(email, password) {
    this.auth.emailLogin(email, password);
  }

}
