import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ArticleFormComponent} from "./components/createArticle/articleForm.component";
import { BackendErrorMessagesModule } from "../../../../auth/types/modules/backendErrorMessages/backendErrorMessages.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule ({
    declarations: [ArticleFormComponent],
    imports: [CommonModule, BackendErrorMessagesModule, ReactiveFormsModule],
    exports: [ArticleFormComponent],

})

export class ArticleFormModule{}