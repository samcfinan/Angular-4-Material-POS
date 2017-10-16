import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HistoryComponent } from './history/history.component';
import { PosComponent } from './pos/pos.component';
import { TicketComponent } from './ticket/ticket.component';

import { PosService } from './pos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HistoryComponent,
    PosComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [PosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
