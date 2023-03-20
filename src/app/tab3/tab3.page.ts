import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
// import { DataService } from '../services/data.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  // userLoggedIn: boolean = false
  selectedCountry: string = '';
  currentTime = new Date().toLocaleTimeString();
  // subscription = new Subscription();
  currentWeather: any = {};
  currentCity: string = 'Nagpur';
  apiLocationDetailResp: any = {};
  imageUrl: string = '';
  localData = {
    coord: {
      lon: 79.1,
      lat: 21.15,
    },
    weather: [
      {
        id: 721,
        main: 'Haze',
        description: 'haze',
        icon: '09d',
      },
    ],
    base: 'stations',
    main: {
      temp: 25.01,
      feels_like: 25.37,
      temp_min: 25.01,
      temp_max: 25.01,
      pressure: 1013,
      humidity: 69,
    },
    visibility: 3000,
    wind: {
      speed: 2.06,
      deg: 180,
    },
    clouds: {
      all: 75,
    },
    dt: 1679077154,
    sys: {
      type: 1,
      id: 9069,
      country: 'IN',
      sunrise: 1679014261,
      sunset: 1679057600,
    },
    timezone: 19800,
    id: 1262180,
    name: 'Nagpur',
    cod: 200,
  };
  forecast = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1661871600,
        main: {
          temp: 296.76,
          feels_like: 296.98,
          temp_min: 296.76,
          temp_max: 297.87,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 933,
          humidity: 69,
          temp_kf: -1.11,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.62,
          deg: 349,
          gust: 1.18,
        },
        visibility: 10000,
        pop: 0.32,
        rain: {
          '3h': 0.26,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-08-30 15:00:00',
      },
      {
        dt: 1661882400,
        main: {
          temp: 295.45,
          feels_like: 295.59,
          temp_min: 292.84,
          temp_max: 295.45,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 71,
          temp_kf: 2.61,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 1.97,
          deg: 157,
          gust: 3.39,
        },
        visibility: 10000,
        pop: 0.33,
        rain: {
          '3h': 0.57,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-08-30 18:00:00',
      },
      {
        dt: 1661893200,
        main: {
          temp: 292.46,
          feels_like: 292.54,
          temp_min: 290.31,
          temp_max: 292.46,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 931,
          humidity: 80,
          temp_kf: 2.15,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'light rain',
            icon: '10n',
          },
        ],
        clouds: {
          all: 68,
        },
        wind: {
          speed: 2.66,
          deg: 210,
          gust: 3.58,
        },
        visibility: 10000,
        pop: 0.7,
        rain: {
          '3h': 0.49,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2022-08-30 21:00:00',
      },
      {
        dt: 1662292800,
        main: {
          temp: 294.93,
          feels_like: 294.83,
          temp_min: 294.93,
          temp_max: 294.93,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 935,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 1.14,
          deg: 17,
          gust: 1.57,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2022-09-04 12:00:00',
      },
    ],
    city: {
      id: 3163858,
      name: 'Zocca',
      coord: {
        lat: 44.34,
        lon: 10.99,
      },
      country: 'IT',
      population: 4593,
      timezone: 7200,
      sunrise: 1661834187,
      sunset: 1661882248,
    },
  };

  // currentWeather: any;
  constructor(private weather: WeatherService) {}
  ngOnInit() {
    // console.log(this.localData);
    // console.log(this.forecast);
    // console.log(this.currentTime);
    this.weather.getCurrentWeather(this.currentCity).subscribe((val: any) => {
      this.localData = val;
      this.imageUrl = `https://openweathermap.org/img/wn/${this.localData.weather[0].icon}@4x.png`;
      this.weather.getForecast(this.currentCity).subscribe((val: any) => {
        this.forecast = val;
      });
    });
  }

  setCity = (e: any) => {
    // console.log(e);
    if (e.target.value !== '' && e.target.value !== this.currentCity) {
      this.weather.getCurrentWeather(e.target.value).subscribe((val: any) => {
        this.localData = val;
        this.currentCity = e.target.value;
        this.imageUrl = `https://openweathermap.org/img/wn/${this.localData.weather[0].icon}@4x.png`;
      });
      this.weather.getForecast(e.target.value).subscribe((val: any) => {
        this.forecast = val;
      });
    }
  };
}
