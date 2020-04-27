import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from './app.component';
import { DepartmetsComponent } from './departmets/departmets.component';
import { DepartmetListComponent } from './departmet-list/departmet-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmetOverviewComponent } from './departmet-overview/departmet-overview.component';
import { DepartmetContactComponent } from './departmet-contact/departmet-contact.component';


const routes: Routes = [
  
      {
        path:'about',
        component:AboutComponent
      },
    
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'gallery',
        component:GalleryComponent
      },
      {
        path:'departments',
        component:DepartmetsComponent
      },
      {
        path:'departmentlist',
        component:DepartmetListComponent
      },
      {
        path:'departments/:id',
        component:DepartmetListComponent,
        children:
        [
          {
            path:'overview',
            component:DepartmetOverviewComponent
          },
          {
            path:'contact',
            component:DepartmetContactComponent
          }

        ]
      },
      {
        path:'photo',
        redirectTo:"gallery"
      },
      {
        path:'**',
        component:PageNotFoundComponent
      }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=
[
DepartmetListComponent,
DepartmetsComponent,
DepartmetOverviewComponent,
DepartmetContactComponent
]

