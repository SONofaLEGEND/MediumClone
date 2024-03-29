import { createAction, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { ActionType } from "../actionTypes";

export const getArticleAction = createAction(
    ActionType.GET_ARTICLE,
    props<{slug:string}>()
)

export const getArticleSuccessAction = createAction(
    ActionType.GET_ARTICLE_SUCCESS,
    props<{article: ArticleInterface}>()
)

export const getArticleFailureAction = createAction(
    ActionType.GET_ARTICLE_FAILURE,
)