import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import { chartValueValidator } from '../../validators/valueValidator';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartForm ! : FormGroup

  title = 'ng2-charts-demo';
  value1! : number;
  value2! : number;

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'input 1', 'Sales' ], [ 'Input 2', 'Sales' ] ];
  public pieChartDatasets = [ {
    data: [this.value1, this.value2]
  } ];
  public pieChartLegend = false;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit(): void {

    this.CreateForm()

    // this.pieChartDatasets = [{
    //   data : [this.value1, this.value2]
    // }]
  }
  // onsubmit(formsData : NgForm){
  //   if(formsData.valid){
  //     console.log(formsData.value.box1, formsData.value.box2)
  //   this.value1 = +formsData.value.box1;
  //   this.value2 = +formsData.value.box2
  //   console.log(typeof this.value1);
  //   }
    
  // }

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

      this.pieChartDatasets = [ {
        data: [this.value1, this.value2]
      } ];
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
