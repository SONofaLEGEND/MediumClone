import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from '@angular/router';
import { switchMap, map, catchError, of } from "rxjs";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleService as SharedArticleService } from "src/app/shared/types/services/article.service";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";
@Injectable()
export class GetArticleEffect { 
    getArticle$ = createEffect(() =>
    this.actions$.pipe(
        ofType(getArticleAction),
        switchMap(({slug}) => {
            return this.sharedArticleService.getArticle(slug).pipe(
                map((article:ArticleInterface) => {
                    
                    return getArticleSuccessAction({article})
                }),

                catchError((errorResponse: HttpErrorResponse) => {
                    return of(getArticleFailureAction())
                })
            )
        })
        )
    )


    constructor(
        private actions$:Actions, 
        private router:Router,
        private sharedArticleService:SharedArticleService){}
}