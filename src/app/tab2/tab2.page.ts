import { Component } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  mArticles: Array<any>;
  constructor(private newsapi: NewsApiService) {
    this.mArticles = [];
  }

  ngOnInit() {
    //load articles
    this.newsapi.initArticles().subscribe((data: any) => {
      this.mArticles = data['articles'];
      console.log(this.mArticles);
    });
  }

  searchArticles(source: any) {
    console.log('selected source is: ' + source);
    this.newsapi
      .getArticlesByID(source)
      .subscribe((data: any) => (this.mArticles = data['articles']));
  }
}
