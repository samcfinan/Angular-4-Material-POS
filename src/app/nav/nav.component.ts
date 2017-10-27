import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loggedIn;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.loggedIn = this.auth.authState;
  }

  logout() {
    this.auth.signOut();
  }

  checkAuthState() {

  }

}
