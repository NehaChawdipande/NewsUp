import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  api_key = '84a527baf3254a9eade13c9d78e68316';

  constructor(private http: HttpClient) {}
  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key
    );
  }
  initSourceCategory(category: string) {
    return this.http.get(
      `https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${this.api_key}`
    );
  }
  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
        this.api_key
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
