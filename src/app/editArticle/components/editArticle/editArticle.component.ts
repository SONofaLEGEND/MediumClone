import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, map, Observable } from "rxjs";
import { createArticleAction } from "src/app/createArticle/store/actions/createArticle.action";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { getArticleAction } from "../../store/actions/getArticle.action";
import { updateArticleAction } from "../../store/actions/updateArticle.action";
import { articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";

@Component ({
    selector: 'app-edit-article',
    templateUrl:  './editArticle.component.html'
})

export class EditArticleComponent implements OnInit{
    initialValues$:Observable<ArticleInputInterface>
    isSubmitting$:Observable<boolean>
    backendErrors$:Observable<BackendErrorsInterface | null>
    slug:string
    isLoading$:Observable<boolean>
    constructor(private store:Store, private route:ActivatedRoute){}
    ngOnInit(): void {
        this.initialValues();
        this.fetchData();
        
    }
    initialValues() {
        this.slug = this.route.snapshot.paramMap.get('slug');
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))

        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
        this.initialValues$ = this.store.pipe(
            select(articleSelector), 
            filter(Boolean),
            map((article:ArticleInterface) => {
                return {
                    title: article.title,
                    description: article.description,
                    body: article.body,
                    tagList: article.tagList
                }
            }))
    }

    fetchData() {
        this.store.dispatch(getArticleAction({slug:this.slug}))
    }
    OnSubmit(articleInput: ArticleInputInterface){
        this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}))
    }
}