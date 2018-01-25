import { Injectable } from '@angular/core';
import { movies } from '../../shared/examples'
import { Movie } from '../../shared/models/movie.model'

import { Observable, Observer } from 'rxjs';


@Injectable()
export class MoviesService {

  private movieList: Array<Movie>

  constructor() {
    this.movieList = movies.map(movie => {
      return new Movie(movie);
    })
   }



  getMovies()
  {
    return new Observable((o: Observer<any>) => {
      o.next(this.movieList);
      return o.complete();
    })
  }



  

}
