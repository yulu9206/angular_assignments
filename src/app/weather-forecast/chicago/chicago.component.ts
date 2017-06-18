import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }
  weather:JSON
  error:JSON
  humidity: string
  tempAvg: string
  status: string
  ngOnInit() {
    this._weatherService.getWeather('chicago')
    .then((info)=>{
      this.weather = info;
      this.humidity = info.main.humidity;
      this.tempAvg = info.main.temp;
      this.status = info.weather[0].description;
    })
    .catch((err)=>{this.error=err;
    })
  }

}
