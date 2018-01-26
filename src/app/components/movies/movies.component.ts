import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../../shared/services/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {

  private movies: any[] = [];
  public counter = 0;

  public selectedAll = false;
  public selectedAny = false;


  constructor(private movieService: MoviesService) { }

  public selected(yes: boolean)
  {
    this.counter++;
    this.selectedAny = true;
  }

  public selectAllCounter() {
    this.counter = this.movies.length;
  }

  public deselectAllCounter() {
    this.counter = 0;
  }


  ngOnInit() {
    this.movieService.getMovies().subscribe(
      data => {this.movies = data;})
  }

}
