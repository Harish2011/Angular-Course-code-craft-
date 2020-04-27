import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { DepartmetsComponent } from './departmets/departmets.component';
import { DepartmetListComponent } from './departmet-list/departmet-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmetOverviewComponent } from './departmet-overview/departmet-overview.component';
import { DepartmetContactComponent } from './departmet-contact/departmet-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    GalleryComponent,
    HomeComponent,
    DepartmetsComponent,
    DepartmetListComponent,
    PageNotFoundComponent,
    DepartmetOverviewComponent,
    DepartmetContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
