import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../core/app-routing.module';
import { FormsModule } from '@angular/forms';


import { HistoryComponent } from './history/history.component';
import { PosComponent } from './pos/pos.component';
import { TicketComponent } from './ticket/ticket.component';
import { HomeComponent } from './home.component';
import { LineItemModalComponent } from './history/line-item-modal/line-item-modal.component';
import { TransactionsComponent } from './transactions/transactions.component';

import {MatIconModule, MatButtonModule, MatTabsModule, MatCardModule, MatDialogModule, MatSelectModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    TicketComponent,
    LineItemModalComponent,
    PosComponent,
    HistoryComponent,
    TransactionsComponent
  ],
  entryComponents: [LineItemModalComponent]
})
export class HomeModule { }
