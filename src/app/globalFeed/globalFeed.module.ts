import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedModule } from "../shared/types/modules/feed/feed.module";
import { BannerModule } from "../shared/types/modules/banner/banner.module";
import { PopularTagsModule } from "../shared/types/modules/popularTags/popularTags.module";
const routes = [
    {
        path: '',
        component: GlobalFeedComponent
        
    }
]
@NgModule ({
    declarations: [
        GlobalFeedComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagsModule
    ]
})
export class GlobalFeedModule{}