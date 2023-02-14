import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { FeedStateInterface } from "./modules/feed/types/feedState.interface";
import { PopularTagsStateInterface } from "./modules/popularTags/types/popularTagsState";
import { PopularTagType } from "./popularTag.type";

export interface  AppStateInterface {
    auth: AuthStateInterface 
    feed: FeedStateInterface
    popularTags: PopularTagsStateInterface
}