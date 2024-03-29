import { createReducer, on , Action} from "@ngrx/store";
import { articleFeatureSelector } from "src/app/article/store/selectors";
import { EditArticleStateInterface } from "../types/editArticleState.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/getArticle.action";
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from "./actions/updateArticle.action";

const initialState: EditArticleStateInterface = {
    isLoading: false,
    article: null,
    isSubmitting: false,
    validationErrors: null
}

const editArticleReducer = createReducer (
    initialState,
    on(
        updateArticleAction,
        (state): EditArticleStateInterface => ({
            ...state,
            isSubmitting: true,
            
        })
    ),
    on(
        updateArticleSuccessAction,
        (state): EditArticleStateInterface => ({
            ...state,
            isSubmitting: false,
            
        })
    ),
    on(
        updateArticleFailureAction,
        (state, action): EditArticleStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
            
        })
    ),
    on(
        getArticleAction,
        (state): EditArticleStateInterface => ({
            ...state,
            isLoading: true,
            
        })
    ),
    on(
        getArticleSuccessAction,
        (state, action): EditArticleStateInterface => ({
            ...state,
            isLoading: false,
            article: action.article
            
        })
    ),
    on(
        getArticleFailureAction,
        (state): EditArticleStateInterface => ({
            ...state,
            isLoading: false
            
        })
    )
) 

export function reducers(state: EditArticleStateInterface, action:Action){
    return editArticleReducer(state, action);
}