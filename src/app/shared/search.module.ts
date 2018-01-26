import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { SearchComponent } from '../components/search/search.component';
import { SearchPageComponent } from '../components/search/search-page/search-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
    
  ],
  declarations: [
    SearchComponent,
    SearchPageComponent,
    
  ],
  exports: [
    SearchComponent,
    SearchPageComponent
  ]
})


export class SearchModule { }
