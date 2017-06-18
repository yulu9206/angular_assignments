import {WeatherForecastComponent} from './weather-forecast/weather-forecast.component';
import {SanJoseComponent} from './weather-forecast/san-jose/san-jose.component';
import {ChicagoComponent} from './weather-forecast/chicago/chicago.component';
import {Routes, RouterModule} from '@angular/router';

const APP_ROUTES: Routes = [
    {path:'', redirectTo:'sanjose', pathMatch: 'full'},
    {path:'sanjose', component: SanJoseComponent},
    {path:'chicago', component: ChicagoComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);