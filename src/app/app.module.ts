import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './shared/search.module';


import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieRowComponent } from './components/movie-row/movie-row.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    MovieRowComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
