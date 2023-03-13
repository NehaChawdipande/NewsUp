import { Component } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  selectedCategory: string;
  mSources: Array<any>;
  categories: Array<any>;
  listOfCategories: Array<any>;
  sortedSources: Array<any>;
  tileColors: Array<string> = [
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'success',
    'dark',
  ];

  constructor(private newsapi: NewsApiService) {
    this.mSources = [];
    this.categories = [];
    this.listOfCategories = [];
    this.sortedSources = [];
    this.selectedCategory = 'Categories';
  }
  ngOnInit() {
    //load news sources
    this.newsapi.initSources().subscribe((data: any) => {
      this.mSources = data['sources'];
      this.listOfCategories = Object.values(
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
  sort = () => {
    this.sortedSources = this.mSources.filter(
      (source: any) => source.category === this.selectedCategory
    );
    console.log(this.sortedSources);
  };
  navigate = (url: string) => {
    window.open(url);
  };
}
