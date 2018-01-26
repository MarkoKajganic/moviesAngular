import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService} from '../shared/services/movies.service';
import { MovieRowComponent } from '../components/movies/movie-row/movie-row.component';


@NgModule({
  imports: [
    CommonModule,
 
  ],
  providers: [
      MoviesService
  ],
  declarations: [
    MovieRowComponent
  ],
  exports: [
    MovieRowComponent
  ]
})
export class SharedModule { }
