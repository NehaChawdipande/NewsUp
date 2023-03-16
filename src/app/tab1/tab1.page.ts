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
  mArticles: Array<any>;
  mSwitchArticles: boolean; //true if switch is for articles
  categories: Array<any>;
  listOfCategories: Array<any>;
  sortedData: Array<any>;
  selectedCountry: string;
  defaultImgUrl: string;

  constructor(private newsapi: NewsApiService) {
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
    this.selectedCountry = 'in';
    this.defaultImgUrl =
      'https://ionicframework.com/docs/img/demos/card-media.png';
    // ae,ar,at,au,be,bg,br,ca,ch,cn,co,cu,cz,de,eg,fr,gb,gr,hk,hu,id,ie,il,in,it,jp,kr,lt,lv,ma,mx,my,ng,nl,no,nz,ph,pl,pt,ro,rs,ru,sa,se,sg,si,sk,th,tr,tw,ua,us,ve,za
  }
  ngOnInit() {
    if (this.mSwitchArticles) {
      //load articles
      this.newsapi.initArticles(this.selectedCountry).subscribe((data: any) => {
        this.mArticles = data['articles'];
        // console.log('articles', this.mArticles);
      });
    } else {
      //load news sources
      this.newsapi.initSources().subscribe((data: any) => {
        this.mSources = data['sources'];
      });
    }
  }
  sort = () => {
    if (this.mSwitchArticles) {
      this.newsapi
        .initArticleByCategory(this.selectedCountry, this.selectedCategory)
        .subscribe((data: any) => {
          this.sortedData = data['articles'];
          // console.log(this.sortedData);
          // console.log('articles sorted', this.sortedData);
        });
    } else {
      this.sortedData = this.mSources.filter(
        (source: any) => source.category === this.selectedCategory
      );
      // console.log('sources sorted', this.sortedData);
    }
  };
  navigate = (url: string) => {
    window.open(url);
  };
}
