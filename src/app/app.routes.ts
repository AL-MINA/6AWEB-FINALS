import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
export const routes: Routes = [
    {path: '', component : TemplateDrivenComponent},
    {path: 'reactive-form', component : ReactiveComponent},
    {path: 'reactive-form-validation', component : ReactiveFormValidationComponent},
];
