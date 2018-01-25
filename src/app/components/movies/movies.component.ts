import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../../shared/services/movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {

  private movies: any[] = [];

  constructor(private movieService: MoviesService) { }



  ngOnInit() {
    this.movieService.getMovies().subscribe(
      data => {this.movies = data;})
  }

}
