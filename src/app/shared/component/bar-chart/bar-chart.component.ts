import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { chartValueValidator } from '../../validators/valueValidator';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chartForm ! : FormGroup

  title = 'ng2-charts-demo';
  value1! : number;
  value2! : number;

  // Pie
  // public pieChartOptions: ChartOptions<'pie'> = {
  //   responsive: false,
  // };
  // public pieChartLabels = [ [ 'input 1', 'Sales' ], [ 'Input 2', 'Sales' ] ];
  // public pieChartDatasets = [ {
  //   data: [this.value1, this.value2]
  // } ];
  // public pieChartLegend = false;
  // public pieChartPlugins = [];

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data']
   = {
    labels: [ 'bar chart' ],
    datasets: [
      { data: [ ], label: 'Input 1' },
      { data: [ ], label: 'Input 2' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() { }

  ngOnInit(): void {
    this.CreateForm()
  }
  CreateForm(){
    this.chartForm = new FormGroup({
      firstValue : new FormControl(null, [Validators.required, chartValueValidator.validChartValue]),
      secondValue : new FormControl(null, [Validators.required, chartValueValidator.validChartValue])
    })
  }
  onSubmitForm(){
    if(this.chartForm.valid){
      console.log(this.chartForm.value)
      this.value1 = +this.chartForm.value.firstValue;
      this.value2 = +this.chartForm.value.secondValue

      

      // this.barChartData = [ {
      //   datasets: [
      //     {data : [this.value1]}
      //   ]
      // } ];

      this.barChartData =  {
        labels: [ 'input' ],
        datasets: [
          { data: [ this.value1 ], label: 'Series A' },
          { data: [ this.value2], label: 'Series B' }
        ]
      };
    }
  }

  onBoxBlur(eve : Event){
    let box = eve.target as HTMLInputElement;
    let getId = box.id;
    console.log(getId)
    let val = +box.value;
    if(val <= 100){
      if(getId === 'box2'){
        this.chartForm.patchValue({
          firstValue : 100 - val
        })
      }
      if(getId === 'box1'){
        this.chartForm.patchValue({
          secondValue : 100 - val
        })
      }
    }
  }
}
