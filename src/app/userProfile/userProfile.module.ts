import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FeedModule } from "../shared/types/modules/feed/feed.module";
import { UserProfileComponent } from "./components/userProfile/userProfile.component";
import { UserProfileService } from "./services/userProfile.service";
import { GetUserProfileEffect } from "./store/effects/getUserProfile.effects";
import { reducers } from "./store/reducers";

const routes = [
    {
        path: 'profiles/:slug',
        component: UserProfileComponent
    },
    {
        path: 'profiles/:slug/favorites',
        component: UserProfileComponent
    }
]
@NgModule({
    declarations: [UserProfileComponent],
    imports: [CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule
],
    providers: [UserProfileService],
    exports: [UserProfileComponent]
})

export class UserProfileModule{}