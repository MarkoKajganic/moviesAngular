import { Component, OnInit ,Input, EventEmitter, Output, SimpleChange, OnChanges } from '@angular/core';
import { Movie } from '../../../shared/models/movie.model'

@Component({
  selector: '[movieRow]',
  templateUrl: './movie-row.component.html',
})
export class MovieRowComponent implements OnChanges{

    private movie: Movie;
    private selectedMovie = false
    private isSelected: number;


    @Input() selectedAny;

    @Input() selectedAll: boolean;
    @Input() deselectAll: boolean;


    @Output() selected = new EventEmitter<boolean>();


  @Input()
  set movieRow(movie: Movie) {
    this.movie = movie;
  }

  public selectMovie(yes: boolean) {
    this.selected.emit(yes);
    this.selectedMovie = true;
  }

  public ngOnChanges(changes) {
    if (this.selectedAny === false) {
        this.selectedMovie = this.selectedAll;
    }
}


  constructor() { }

  ngOnInit() {
  }

}
