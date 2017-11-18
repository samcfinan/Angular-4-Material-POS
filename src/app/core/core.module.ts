import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AdminGuard } from './admin.guard';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [],
  providers: [AuthService, AdminGuard]
})
export class CoreModule { }
