import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToFavoritesAction } from "../store/actions/addToFavorites.action";

@Component({
    selector: 'app-add-to-favorites',
    templateUrl: './addToFavorites.component.html',
    styleUrls: ['./addToFavorites.component.scss']
})

export class AddToFavoriteComponent implements OnInit{
    ngOnInit(): void {
        this.favoritesCount = this.favoritesCountProps
        this.isFavorited = this.isFavoritedProps
    }
    @Input('isFavorited') isFavoritedProps:boolean
    @Input('favoritesCount') favoritesCountProps:number
    @Input('articleSlug') articleSlugProps:string

    favoritesCount:number
    isFavorited:boolean
    constructor(private store:Store) {}
    handleLike() {
        this.store.dispatch(addToFavoritesAction({
            isFavorited: this.isFavorited,
            slug: this.articleSlugProps
        }))
        if(this.isFavorited) {
            this.favoritesCount = this.favoritesCount - 1
        }
        else {
            this.favoritesCount = this.favoritesCount + 1
        }
        this.isFavorited = !this.isFavorited
    }
}