import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Country, State, City, ICity } from 'country-state-city';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class NavbarComponent implements OnInit, OnDestroy {
  selectedCountryCode: string;
  selectedState: string;
  selectedCity: string;
  stateList: Array<any>;
  countryList: Array<any>;
  cityList: Array<ICity> | undefined;
  subscription = new Subscription();

  constructor(private storage: Storage, private data: DataService) {
    this.selectedCountryCode = 'IN';

    this.selectedCity = 'default';
    this.selectedState = 'default';
    this.stateList = ['Maharashtra'];
    this.cityList = undefined;
    this.countryList = [];
  }

  ngOnInit() {
    this.subscription = this.data.currentCountry.subscribe(
      (code: string) => (this.selectedCountryCode = code)
    );
    // this.countryList = Country.getAllCountries();
    this.countryList = [
      {
        isoCode: 'AR',
        name: 'Argentina',
      },
      {
        isoCode: 'AT',
        name: 'Austria',
      },
      {
        isoCode: 'AU',
        name: 'Australia',
      },
      {
        isoCode: 'BR',
        name: 'Brazil',
      },
      {
        isoCode: 'CA',
        name: 'Canada',
      },
      {
        isoCode: 'CN',
        name: 'China',
      },
      {
        isoCode: 'fr',
        name: 'France',
      },
      {
        isoCode: 'DE',
        name: 'Germany',
      },
      {
        isoCode: 'ID',
        name: 'Indonesia',
      },
      {
        isoCode: 'IN',
        name: 'India',
      },
      {
        isoCode: 'IT',
        name: 'Italy',
      },
      {
        isoCode: 'JP',
        name: 'Japan',
      },
      {
        isoCode: 'MX',
        name: 'Mexico',
      },
      {
        isoCode: 'NZ',
        name: 'New Zealand',
      },
      {
        isoCode: 'RU',
        name: 'Russia',
      },
      {
        isoCode: 'SA',
        name: 'Saudi Arabia',
      },
      {
        isoCode: 'KR',
        name: 'South Korea',
      },
      {
        isoCode: 'TR',
        name: 'Turkey',
      },
      {
        isoCode: 'AE',
        name: 'UAE',
      },
      {
        isoCode: 'GB',
        name: 'United Kingdom',
      },
      {
        isoCode: 'US',
        name: 'USA',
      },
      {
        isoCode: 'ZA',
        name: 'South Africa',
      },
    ];
    // this.storage.get('Country').then((val: any) => {
    //   // console.log(this.selectedCountryCode, val);
    //   if (val !== '') this.selectedCountryCode = val;
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setCountryCode = (e: any) => {
    // console.log('before',this.selectedCountryCode, e.detail.value);
    this.selectedCountryCode = e.detail.value;
    this.data.changeCountry(this.selectedCountryCode);
    this.storage.set('Country', e.detail.value);

    // console.log('after',this.selectedCountryCode, e.detail.value.name);
  };
  getStateList = () => {
    this.stateList = State.getStatesOfCountry(this.selectedCountryCode);
  };
  setStateCode = (e: any) => {
    this.selectedState = e.detail.value;
    this.cityList = City.getCitiesOfState(
      this.selectedCountryCode,
      this.selectedState
    );
  };
  setCity = (e: any) => {
    this.selectedCity = e.detail.value;
    this.storage.set('State', this.selectedState);
    this.storage.set('City', this.selectedCity);
  };
}
