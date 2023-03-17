import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private countrySource = new BehaviorSubject('IN');
  currentCountry = this.countrySource.asObservable();

  constructor() {}

  changeCountry(code: string) {
    this.countrySource.next(code);
  }
}
