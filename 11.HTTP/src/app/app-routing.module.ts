import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpExampleComponent } from './http-example/http-example.component';


const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'httpexample',
    component:HttpExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
