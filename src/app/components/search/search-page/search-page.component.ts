import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../shared/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../../shared/models/movie.model'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit {

  private movies: Movie[];
  private searchTerm;

  constructor(private movieService: MoviesService,
              private route: ActivatedRoute,
              private router: Router) {

   }

  ngOnInit() {
    let searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    this.movieService.search(searchTerm).subscribe(data => {
      this.movies = data;
      console.log(this.movies);
      this.searchTerm = searchTerm;
    }, (searchTerm) => {
         alert('There are no movies with searched term: ' + searchTerm);
         this.router.navigate(['movies']);
    });

  }

}
