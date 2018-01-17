import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../database.service';




@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  public lineChartType = 'line';
  public lineChartOptions: any = {
    responsive: true
  };
  public barChartLegend
   = true;

  public lineChartColors: Array<any> = [

    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartData: Array<any> = [];

  isDataAvailable = false;

  constructor(private db: DatabaseService) {

  }

  ngOnInit() {
    this.db.updateNumRequested(99999);
    this.db.getSnapshot().subscribe(data => {
      // let transactionsPerDay = [];
      // data.map(transaction => {

      // });
      console.log(data);
      this.isDataAvailable = true;
    });
  }

}
