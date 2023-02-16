import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingsStateInterface} from "../types/settingsState.interface"
export const settingFeatureSelector = createFeatureSelector<
SettingsStateInterface
>('settings')
export const isSubmittingSelector = createSelector(
settingFeatureSelector,
(settingsState: SettingsStateInterface) => settingsState.isSubmitting
)
export const validationErrorsSelector = createSelector(
    settingFeatureSelector,
    (settingsState:SettingsStateInterface) => settingsState.validationErrors
)