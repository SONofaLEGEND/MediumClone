import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, forkJoin, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { deleteArticleAction } from '../../store/actions/deleteArticle.action';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { articleSelector, errorSelector, isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy{
  slug:string;
  article:ArticleInterface;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean | null>
  constructor(private store:Store, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe
  }
  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuthor$ = combineLatest(
      [this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))]
    ).pipe(
      map(
        ([article, currentUser]: 
          [ArticleInterface | null, 
          CurrentUserInterface | null
        ]) => {
      if (!article || !currentUser) {
        return false
      }
      return currentUser.username === article.author.username
    }))

  }
  initializeListeners() {
     this.articleSubscription = this.store
     .pipe(select(articleSelector))
     .subscribe((article:ArticleInterface | null) => {
      this.article = article
     })
  }
  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  deleteArticle() {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }

}
