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
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric` //default unit is in celsius
    );
  }
  getForecast(city: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.api_key}&units=metric` //default unit is in celsius
    );
  }
}
