import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { filter, Observable, Subscription } from 'rxjs';
import { logoutAction } from 'src/app/auth/store/actions/sync.action';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy{
form: FormGroup;
currentUser:CurrentUserInterface;
currentUserSubscription: Subscription;
isSubmitting$:Observable<boolean>
backendErrors$:Observable<BackendErrorsInterface | null>
constructor(private fb:FormBuilder, private store:Store){}

ngOnInit(): void {
  this.initializeValues()
  this.initializeListeners();
  //this.initializeForm();
}
ngOnDestroy(): void {
  this.currentUserSubscription.unsubscribe()
}
initializeForm() {
  this.form = this.fb.group({
    image: this.currentUser.image,
    username: this.currentUser.username,
    bio: this.currentUser.bio,
    email: this.currentUser.email,
    password: ''
  })
}
initializeValues() {
  this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
}
initializeListeners() {
  this.currentUserSubscription = this.store
  .pipe(select(currentUserSelector), filter(Boolean))
  .subscribe((currentUser:CurrentUserInterface) => {
        this.currentUser = currentUser
        this.initializeForm()
      })
  
}

submit() {
  const currentUserInput: CurrentUserInputInterface = {
    ...this.currentUser,
    ...this.form.value
  }
  this.store.dispatch(updateCurrentUserAction({currentUserInput}))
}
logout() {
  this.store.dispatch(logoutAction())
}
}


