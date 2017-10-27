import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { WelcomeComponent } from '../welcome/welcome.component';
import { HomeComponent } from '../home/home.component';
import { TransactionsComponent } from '../home/transactions/transactions.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoginComponent } from '../welcome/login/login.component';
import { ResetpasswordComponent } from '../welcome/resetpassword/resetpassword.component';
import { UsersComponent  } from '../admin/users/users.component';
import { ItemsComponent } from '../admin/items/items.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    { path: 'users', component: UsersComponent },
    { path: 'items', component: ItemsComponent }
  ] },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
