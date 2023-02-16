import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMessageModule } from "../errorMessage/errorMessage.module";
import { LoadingModule } from "../loading/loading.module";
import { PaginationModule } from "../pagination/pagination.module";
import { PopularTagsModule } from "../popularTags/popularTags.module";
import { TagListModule } from "../tagList/tagList.module";
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from "./services/feed.service";
import { GetFeedEffect } from "./store/effects/getFeed.effect";
import { reducers } from "./store/reducers";
import { AddToFavoriteComponent } from "../addToFavorites/components/addToFavorites.component";
import { AddToFavoriteModule } from "../addToFavorites/addToFavorites.module";

@NgModule ({
    declarations: [
        FeedComponent
    ],
    exports: [
        FeedComponent
    ],
    providers: [
        FeedService
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed', reducers),
        RouterModule,
        ErrorMessageModule,
        LoadingModule,
        PaginationModule,
        TagListModule,
        PopularTagsModule,
        AddToFavoriteModule
    ]
})
export class FeedModule{}