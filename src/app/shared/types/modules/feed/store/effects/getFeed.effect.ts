import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from '@angular/router';
import { switchMap, map, catchError, of, tap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { PersistanceService } from "src/app/shared/types/services/persistance.service";
import { FeedService } from "../../services/feed.service";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeed.action";
import { GetFeedResponseInterface } from "../../types/getFeedResponse.interface";

@Injectable()
export class GetFeedEffect { 
    getFeed$ = createEffect(() =>
    this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({url}) => {
            
            return this.feedService.getFeed(url).pipe(
                map((feed:GetFeedResponseInterface) => {
                    //this.persistanceService.set('accessToken', currentUser.token);
                    return getFeedSuccessAction({feed})
                }),

                catchError(() => {
                    return of(getFeedFailureAction(
                        
                    ))
                })
            )
        })
        )
    )

    
    constructor(
        private actions$:Actions, 
        private feedService:FeedService, 
        ){}
}