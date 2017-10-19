import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './core/app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HistoryComponent } from './history/history.component';
import { PosComponent } from './pos/pos.component';
import { TicketComponent } from './ticket/ticket.component';

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
    HomeComponent,
    NavComponent,
    HistoryComponent,
    PosComponent,
    TicketComponent,
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
    MatGridListModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    CoreModule,
    AngularFirestoreModule
  ],
  providers: [PosService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
