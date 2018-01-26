import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SearchModule } from './shared/search.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';





@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
