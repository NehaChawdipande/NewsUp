import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  api_key = environment.NEWS_API_KEY;

  constructor(private http: HttpClient) {}
  initSources(country:string) {
    return this.http.get(
      `https://newsapi.org/v2/sources?country=${country}&language=en&apiKey=` + this.api_key
    );
  }
  initSourceCategory(category: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${this.api_key}`
    );
  }
  initArticles(country: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.api_key}`
    );
  }
  initArticleByCategory(country: string, category: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.api_key}`
    );
  }

  getArticlesByID(source: string) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
