import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsApiService } from './news-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }],
  bootstrap: [AppComponent],
})
export class AppModule {
  mArticles: Array<any> = [];
  mSources: Array<any> = [];

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //load articles
    this.newsapi
      .initArticles()
      .subscribe((data: any) => (this.mArticles = data['articles']));
    //load news sources
    this.newsapi
      .initSources()
      .subscribe((data: any) => (this.mSources = data['sources']));
  }

  searchArticles(source: any) {
    console.log('selected source is: ' + source);
    this.newsapi
      .getArticlesByID(source)
      .subscribe((data: any) => (this.mArticles = data['articles']));
  }
}
