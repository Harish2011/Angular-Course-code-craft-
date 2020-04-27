import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactWithRxjsComponent } from './react-with-rxjs/react-with-rxjs.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ModelDrivenFormsValidationComponent } from './model-driven-forms-validation/model-driven-forms-validation.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
    
  },
  {
    path:'customdirectives',
    component:CustomDirectiveComponent,
  },
  {
    path:'pipes',
    component:PipesComponent
  },
  {
    path:'ReactWithRxjs',
    component:ReactWithRxjsComponent
  },
  {
    path:'ReactForms',
    component:ReactFormsComponent
  },
  {
    path:'ModelDrivenForms',
    component:ModelDrivenFormsComponent
  
  },
  {
    path:'ModelDrivenFormsValidation',
    component:ModelDrivenFormsValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
