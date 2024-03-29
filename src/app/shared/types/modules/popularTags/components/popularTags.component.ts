import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { getPopularTagsAction } from '../store/actions/getPopularTags.action';
import { errorsSelector, isLoadingSelector, popularTagsSelector } from '../store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  constructor(private store:Store) {}
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }
  initializeValues() {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorsSelector))
  }
  fetchData() {
    this.store.dispatch(getPopularTagsAction())
  }
}
