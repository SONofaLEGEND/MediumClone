import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AddToFavoriteComponent } from "./components/addToFavorites.component";
import { AddToFavoritesService } from "./services/addToFavorites.service";
import { AddToFavoritesEffect } from "./store/effects/addToFavorites.effect";

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([AddToFavoritesEffect])
    ],
    declarations: [AddToFavoriteComponent],
    exports: [AddToFavoriteComponent],
    providers: [AddToFavoritesService]
})

export class AddToFavoriteModule{}