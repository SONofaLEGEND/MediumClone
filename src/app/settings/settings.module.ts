import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { BackendErrorMessagesModule } from "../auth/types/modules/backendErrorMessages/backendErrorMessages.module";
import { ReactiveFormsModule } from '@angular/forms';


const routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
]
@NgModule({
    declarations: [
        SettingsComponent
    ],
    exports: [SettingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('settings', reducers),
        BackendErrorMessagesModule,
        ReactiveFormsModule
    ]
})
export class SettingsModule { }
