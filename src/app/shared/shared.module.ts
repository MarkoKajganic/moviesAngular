import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService} from '../shared/services/movies.service';


@NgModule({
  imports: [
    CommonModule,
 
  ],
  providers: [
      MoviesService
  ],
  declarations: [

  ],
  exports: [

  ]
})
export class SharedModule { }
