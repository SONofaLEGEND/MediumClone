import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedModule } from "../shared/types/modules/feed/feed.module";
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
        FeedModule
    ]
})
export class GlobalFeedModule{}