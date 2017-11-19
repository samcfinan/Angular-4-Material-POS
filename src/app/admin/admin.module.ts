import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../core/app-routing.module';


import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

import {MatIconModule, MatButtonModule, MatCardModule, MatExpansionModule, 
MatInputModule, MatSelectModule, MatCheckboxModule} from '@angular/material';

import { DatabaseService } from '../database.service';
import { AuthService } from '../core/auth.service';
import { ParseUserRolePipe } from './users/parse-user-role.pipe';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    ItemsComponent,
    UsersComponent,
    AdminComponent,
    ParseUserRolePipe
  ],
  providers: [DatabaseService, AuthService]
})
export class AdminModule { }
