import { createAction, props } from "@ngrx/store";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";
import { ActionType } from "../actionTypes";

export const updateArticleAction = createAction(
    ActionType.UPDATE_ARTICLE,
    props<{slug:string; articleInput: ArticleInputInterface}>()
)

export const updateArticleSuccessAction = createAction(
    ActionType.UPDATE_ARTICLE_SUCCESS,
    props<{article: ArticleInterface}>()
)

export const updateArticleFailureAction = createAction(
    ActionType.UPDATE_ARTICLE_FAILURE,
    props<{errors:BackendErrorsInterface}>()
)