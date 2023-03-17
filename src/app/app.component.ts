import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // selectedCountry: string;
  // selectedCity: string;
  // cityList: Array<any>;
  constructor(private storage: Storage) {
    // this.selectedCountry = 'India';
    // this.selectedCity = 'Nagpur';
    // this.cityList = ['Nagpur'];
  }
 async ngOnInit() {
    // this.cityList = State.getStatesOfCountry('IN');
    // console.log('cities in INdia', this.cityList);
    await this.storage.create();
  }
}
