import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  api_key = environment.WEATHER_API_KEY;

  constructor(private http: HttpClient) {}
  getCurrentWeather(city: string) {
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=${this.api_key}&query=${city}&units='m'`
    );
  }
}
