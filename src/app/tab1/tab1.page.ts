import { Component } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  mSources: Array<any>;
  categories: Array<any>;
  sourcesByCategory: Array<any>;

  constructor(private newsapi: NewsApiService) {
    this.mSources = [];
    this.categories = [];

    this.sourcesByCategory = [];
  }
  ngOnInit() {
    //load news sources
    this.newsapi.initSources().subscribe((data: any) => {
      this.mSources = data['sources'];
      this.sourcesByCategory = Object.values(
        this.mSources.reduce((a, { category }) => {
          a[category] = category;
          return a;
        }, {})
      );
    });

    // this.newsapi.initSourceCategory().subscribe((data: any) => {
    //   this.sourcesByCategory = data;
    //   console.log('complete', data);
    // });
  }
  navigate = (url: string) => {
    window.open(url);
  };
}
