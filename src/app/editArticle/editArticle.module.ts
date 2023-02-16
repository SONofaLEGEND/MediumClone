import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ArticleFormModule } from "../shared/types/modules/articleForm/articleForm.module";
import { EditArticleComponent } from "./components/editArticle/editArticle.component";
import { EditArticleService } from "./services/editArticle.service";
import { UpdateArticleEffect } from "./store/effects/updateArticle.effect";
import { reducers } from "./store/reducers";
import { LoadingModule } from "../shared/types/modules/loading/loading.module";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { ArticleService as SharedArticleService } from "../shared/types/services/article.service";
const routes = [
    {
        path: 'articles/:slug/edit',
        component: EditArticleComponent
    }
]
@NgModule ({
    declarations: [EditArticleComponent],
    exports: [EditArticleComponent],
    providers: [EditArticleService, SharedArticleService],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ArticleFormModule,
        EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
        StoreModule.forFeature('editArticle', reducers),
        LoadingModule
    ]
})

export class EditArticleModule{}