import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  title: string = "Favorite Movies";

  movies: Movie[] = [
    {title: 'Insidious', director: 'James Wan', releaseDate: 'April 1, 2011'},
    {title: 'ZombieLand', director: 'Ruben Fleisher', releaseDate: 'October 2, 2009'},
    {title: 'Star Wars: Episode III - Revenge of the Sith', director: 'George Lucas', releaseDate: 'May 9, 2005'},
    {title: 'Godzilla: King of the Monsters', director: 'Michael Dougherty', releaseDate: 'May 31, 2019'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  trackbyFn(index: any, item: any) {
    return item.title;
  }
  
}

class Movie {
  title!: string;
  director!: string;
  releaseDate!: string;
}
