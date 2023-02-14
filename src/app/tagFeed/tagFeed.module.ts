import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeedModule } from "../shared/types/modules/feed/feed.module";
import { BannerModule } from "../shared/types/modules/banner/banner.module";
import { PopularTagsModule } from "../shared/types/modules/popularTags/popularTags.module";
import { FeedTogglerModule } from "../shared/types/modules/feedToggler/feedToggler.module";
import { TagFeedComponent } from "./components/tagFeed/tagFeed.component";
const routes = [
    {
        path: 'tags/:slug',
        component: TagFeedComponent 
        
    }
]
@NgModule ({
    declarations: [
       TagFeedComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedTogglerModule
    ],
    exports: [TagFeedComponent]
})
export class TagFeedModule{}