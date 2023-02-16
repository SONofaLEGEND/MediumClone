import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from '@angular/router';
import { switchMap, map, catchError, of, tap } from "rxjs";
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from "../actions/updateArticle.action";
import { EditArticleService } from "../../services/editArticle.service";
import { ArticleInterface } from "src/app/shared/types/article.interface";

@Injectable()
export class UpdateArticleEffect { 
    updateArticle$ = createEffect(() =>
    this.actions$.pipe(
        ofType(updateArticleAction),
        switchMap(({slug, articleInput}) => {
            return this.editArticleService.updateArticle(slug, articleInput).pipe(
                map((article:ArticleInterface) => {
                    
                    return updateArticleSuccessAction({article})
                }),

                catchError((errorResponse: HttpErrorResponse) => {
                    return of(updateArticleFailureAction(
                        {errors:errorResponse.error.errors}
                    ))
                })
            )
        })
        )
    )

    redirectAfterUpdate$ = createEffect(
        () => 
        this.actions$.pipe(
            ofType(updateArticleSuccessAction),
            tap(({article}) => {
                this.router.navigate(['/articles', article.slug]);
            })
        ),
          {dispatch: false}
    )
    constructor(
        private actions$:Actions, 
        private router:Router,
        private editArticleService:EditArticleService){}
}