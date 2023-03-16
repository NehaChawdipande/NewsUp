import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Country, State, City, ICity } from 'country-state-city';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class NavbarComponent implements OnInit {
  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  stateList: Array<any>;
  cityList: Array<ICity> | undefined;
  constructor() {
    this.selectedCountry = 'India';
    this.selectedCity = 'default';
    this.selectedState = 'default';
    this.stateList = ['Maharashtra'];
    this.cityList = undefined;
  }
  ngOnInit() {
    this.stateList = State.getStatesOfCountry('IN');
    console.log('state in india', this.stateList);
  }

  getStateList = () => {
    this.stateList = State.getStatesOfCountry('IN');
  };
  setStateCode = (e: any) => {
    this.selectedState = e.detail.value;
    this.cityList = City.getCitiesOfState('IN', this.selectedState);
  };
  setCity = (e: any) => {
    this.selectedCity = e.detail.value;
  };
}
