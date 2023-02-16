import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppStateInterface } from "src/app/shared/types/appState.interface"
import { CreateArticleStateInterface } from "../types/createArticleState.interface"

export const createArticleFeatureSelector = createFeatureSelector<
CreateArticleStateInterface>('createArticle')


export const isSubmittingSelector = createSelector(
    createArticleFeatureSelector, 
    (createArticleState:CreateArticleStateInterface) => createArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
    createArticleFeatureSelector,
    (createArticleState:CreateArticleStateInterface) => createArticleState.validationErrors
) 