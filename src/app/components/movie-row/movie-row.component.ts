import { Component, OnInit ,Input, EventEmitter, Output, SimpleChange } from '@angular/core';
import { Movie } from '../../shared/models/movie.model'

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
})
export class MovieRowComponent{

    private movie: Movie;

  @Input()
  set movieRow(movie: Movie) {
    this.movie = movie;
  }


  constructor() { }

  ngOnInit() {
  }

}
