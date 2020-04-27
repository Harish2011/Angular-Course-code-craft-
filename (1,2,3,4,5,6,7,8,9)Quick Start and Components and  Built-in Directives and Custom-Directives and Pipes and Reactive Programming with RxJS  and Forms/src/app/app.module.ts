import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FirstdirectiveDirective } from './firstdirective.directive';
import { PipesComponent } from './pipes/pipes.component';
import { ReactWithRxjsComponent } from './react-with-rxjs/react-with-rxjs.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ModelDrivenFormsValidationComponent } from './model-driven-forms-validation/model-driven-forms-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    FirstdirectiveDirective,
    PipesComponent,
    ReactWithRxjsComponent,
    ReactFormsComponent,
    ModelDrivenFormsComponent,
    ModelDrivenFormsValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
