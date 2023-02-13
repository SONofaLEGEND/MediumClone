import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>; 
  backendErrors$!: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private authService:AuthService, private  store: Store) {}

  ngOnInit(){
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues() : void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    console.log(this.isSubmitting$);
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
  initializeForm() {
    this.form = this.fb.group({
      
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    console.log('submitted');
    const request:LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}))
    
  }
}
