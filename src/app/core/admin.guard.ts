import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';

@Injectable()
export class AdminGuard implements CanActivate {
  user: User;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe(data => this.user = data);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.user.admin;
    }
}
