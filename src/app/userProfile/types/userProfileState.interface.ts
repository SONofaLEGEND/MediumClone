import { UserProfileInterface } from "./userProfile.interface";

export interface UserProfileStateInterface {
    data: UserProfileInterface
    isLoading: boolean
    error:string | null
}