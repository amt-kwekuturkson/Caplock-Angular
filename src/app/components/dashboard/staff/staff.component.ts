import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{

  staffChart: any;

ngOnInit(): void {
    this.myChart()
}

myChart() {
  if (this.staffChart) {
    this.staffChart.destroy()
  }

  this.staffChart = new Chart('graph-holder', {
    type: 'doughnut',
    
    data: {
      datasets: [{
        label: 'Number of staffs',
        data: [9, 6, 10,5],
        backgroundColor: [
          'rgb(239 68 68)',
          'rgb(248 113 113)',
          'rgb(252 165 165 )',
          'rgb(254 202 202)'
        ],
        hoverOffset: 20
      }]
    },
   
  })
}
}

