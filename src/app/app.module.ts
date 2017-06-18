import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { SanJoseComponent } from './weather-forecast/san-jose/san-jose.component';
import { ChicagoComponent } from './weather-forecast/chicago/chicago.component';

import {WeatherService} from './weather.service';
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    SanJoseComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
