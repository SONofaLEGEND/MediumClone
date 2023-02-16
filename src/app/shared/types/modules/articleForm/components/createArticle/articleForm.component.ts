import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component ({
    selector: 'app-article-form',
    templateUrl:  './articleForm.component.html'
})

export class ArticleFormComponent implements OnInit{
    @Input('initalValues') initalValuesProps: ArticleInputInterface

    @Input('isSubmitting') isSubmittingProps: boolean

    @Input('errors') errorsProps:BackendErrorsInterface | null

    @Output('articleSubmit')
    articleSubmitEvent = new EventEmitter<
    ArticleInputInterface
    >()

    form: FormGroup

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
        this.initializeForm()
    }

    initializeForm() {
        this.form = this.fb.group({
            title: this.initalValuesProps.title,
            description: this.initalValuesProps.description,
            body: this.initalValuesProps.body,
            tagList: this.initalValuesProps.tagList.join(' ')
        })
    }

    OnSubmit() {
        this.articleSubmitEvent.emit(this.form.value);
    }
}