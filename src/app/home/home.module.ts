import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryComponent } from './history/history.component';
import { PosComponent } from './pos/pos.component';
import { TicketComponent } from './ticket/ticket.component';
import { HomeComponent } from './home.component';
import { LineItemModalComponent } from './history/line-item-modal/line-item-modal.component';

import {MatIconModule, MatButtonModule, MatTabsModule, MatCardModule, MatDialogModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule
  ],
  declarations: [
    HomeComponent,
    TicketComponent,
    LineItemModalComponent,
    PosComponent,
    HistoryComponent
  ],
  entryComponents: [LineItemModalComponent]
})
export class HomeModule { }
