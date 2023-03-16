import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectedCountry: string;
  selectedCity: string;
  cityList: Array<any>;
  constructor() {
    this.selectedCountry = 'India';
    this.selectedCity = 'Nagpur';
    this.cityList = ['Nagpur'];
  }
  ngOnInit() {
    // this.cityList = State.getStatesOfCountry('IN');
    // console.log('cities in INdia', this.cityList);
  }
}
