import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  selectedCategory: string;
  mSources: Array<any>;
  mArticles: Array<any>;
  mSwitchArticles: boolean;
  categories: Array<any>;
  listOfCategories: Array<any>;
  sortedData: Array<any>;
  selectedCountry: string;
  defaultImgUrl: string;
  subscription = new Subscription();

  constructor(
    private newsapi: NewsApiService,
    private data: DataService,
    private storage: Storage
  ) {
    this.mSources = [];
    this.categories = [];
    this.listOfCategories = [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology',
    ];
    this.sortedData = [];
    this.mArticles = [];
    this.mSwitchArticles = true;
    this.selectedCategory = 'Categories';
    this.selectedCountry = 'IN';
    this.defaultImgUrl =
      'https://www.shutterstock.com/image-illustration/breaking-news-minimalistic-logo-on-260nw-1298244646.jpg';
  }

  ngOnInit() {
    this.subscription = this.data.currentCountry.subscribe((code: string) => {
      this.selectedCountry = code;
      //load articles
      this.newsapi.initArticles(this.selectedCountry).subscribe((data: any) => {
        this.mArticles = data['articles'];
      });
      // load articles
      this.newsapi.initSources(this.selectedCountry).subscribe((data: any) => {
        this.mSources = data['sources'];
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sort = () => {
    // if (this.mSwitchArticles) {
    this.storage.get('Country').then((val: any) => {
      this.selectedCountry = val;
    });
    this.newsapi
      .initArticleByCategory(this.selectedCountry, this.selectedCategory)
      .subscribe((data: any) => {
        this.sortedData = data['articles'];
      });
    // } else {
    // this.sortedData = this.mSources.filter(
    //   (source: any) => source.category === this.selectedCategory
    // );
    // }
  };
  navigate = (url: string) => {
    window.open(url);
  };
}
