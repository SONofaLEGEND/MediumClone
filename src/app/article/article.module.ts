import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ArticleService as SharedArticleService} from "../shared/types/services/article.service";
import { ArticleComponent } from "./components/article/article.component";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { reducers } from "./store/reducers";
import { LoadingModule } from "../shared/types/modules/loading/loading.module";
import { ErrorMessageModule } from "../shared/types/modules/errorMessage/errorMessage.module";
import { TagListModule } from "../shared/types/modules/tagList/tagList.module";
import { DeleteArticleEffect } from "./store/effects/deleteArticle.effect";
import { ArticleService } from "./services/article.service";
import { EditArticleModule } from "../editArticle/editArticle.module";
const routes = [
    {
        path: 'articles/:slug',
        component: ArticleComponent
    }
]
@NgModule ({
    declarations: [
        ArticleComponent
    ],
    providers: [SharedArticleService, ArticleService],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('article', reducers),
        EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
        LoadingModule,
        ErrorMessageModule,
        TagListModule,
        EditArticleModule
    ]
})
export class ArticleModule{}