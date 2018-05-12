import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ArticleService } from '../utils/article.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  private articles: Observable<any[]>

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles()
  }

  private articleClick(article) {
    console.log(article)
  }

}
