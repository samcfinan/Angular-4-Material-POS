import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';

import { NotifyService } from './notify.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private notify: NotifyService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.admin) {
      this.notify.update('You do not have admin privileges.', 'error');
    }
    return this.authService.admin;
    }
}
