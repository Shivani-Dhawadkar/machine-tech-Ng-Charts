import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './shared/component/chart/chart.component';
import { BarChartComponent } from './shared/component/bar-chart/bar-chart.component';

const routes: Routes = [
  {path:'', component:ChartComponent},
  {path:'barchart', component:BarChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
