import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})

export class SearchComponent implements OnInit {

  private searchTerm;

  search(searchTerm)
  {
    this.router.navigate(['search', this.searchTerm]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
