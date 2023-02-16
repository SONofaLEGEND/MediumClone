import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeedModule } from "../shared/types/modules/feed/feed.module";
import { BannerModule } from "../shared/types/modules/banner/banner.module";
import { PopularTagsModule } from "../shared/types/modules/popularTags/popularTags.module";
import { FeedTogglerModule } from "../shared/types/modules/feedToggler/feedToggler.module";
import { YourFeedComponent } from "./components/your-feed/your-feed.component";
import { UserProfileModule } from "../userProfile/userProfile.module";
const routes = [
    {
        path: 'feed',
        component: YourFeedComponent 
        
    }
]
@NgModule ({
    declarations: [
        YourFeedComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedTogglerModule,
        UserProfileModule
    ]
})
export class YourFeedModule{}