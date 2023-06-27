import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './shared/component/chart/chart.component';
import { MaterialModule } from './shared/services/material/material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { BarChartComponent } from './shared/component/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    NavbarComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
