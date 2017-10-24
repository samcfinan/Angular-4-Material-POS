import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './core/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatButtonModule, MatTabsModule, MatCardModule, MatDialogModule, MatSelectModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


import { PosService } from './pos.service';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DatabaseService } from './database.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin/admin.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    AdminComponent,
    TransactionsComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CoreModule,
    AngularFirestoreModule
  ],
  providers: [PosService, DatabaseService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
