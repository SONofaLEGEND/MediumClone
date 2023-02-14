import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../../appState.interface";
import { PopularTagsStateInterface } from "../types/popularTagsState";

export const popularTagsFeatureSelector = createFeatureSelector<
     PopularTagsStateInterface
    >('popularTags')

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState:PopularTagsStateInterface) => popularTagsState.data
)
export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState:PopularTagsStateInterface) => popularTagsState.isLoading
)
export const errorsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState:PopularTagsStateInterface) => popularTagsState.error
)