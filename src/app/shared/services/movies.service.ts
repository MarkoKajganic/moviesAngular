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

  search(searchTerm): Observable<Movie[]>
  {
    const foundMovies = this.movieList.filter((movie: Movie) => {
      return movie.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    if (foundMovies.length === 0) {
      return Observable.throw(searchTerm);
    }
    return Observable.of(foundMovies);
  }

  

}
