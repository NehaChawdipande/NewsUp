import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  // selectedCategory: string;
  // mSources: Array<any>;
  // mArticles: Array<any>;
  // mSwitchArticles: boolean; //true if switch is for articles
  // categories: Array<any>;
  // listOfCategories: Array<any>;
  // sortedData: Array<any>;
  // selectedCountry: string;
  // defaultImgUrl: string;

  constructor(private newsapi: NewsApiService) {}
  ngOnInit() {}
}
