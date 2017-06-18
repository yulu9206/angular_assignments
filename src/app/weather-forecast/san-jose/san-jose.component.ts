import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  constructor(private _weatherService: WeatherService) { }
  weather:JSON
  error:JSON
  humidity: string
  tempAvg: string
  status: string
  ngOnInit() {
    this._weatherService.getWeather('sanjose')
    .then((info)=>{
      console.log(info)
      this.weather = info;
      this.humidity = info.main.humidity;
      this.tempAvg = info.main.temp;
      this.status = info.weather[0].description;
    })
    .catch((err)=>{console.log(err);
    })
  }

}
