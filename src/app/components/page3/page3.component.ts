import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  title: string = "Favorite Movies";

  movies: Movie[] = [
    {imageName: 'insidious', title: 'Insidious', director: 'James Wan', releaseDate: 'April 1, 2011'},
    {imageName: 'zombieland', title: 'ZombieLand', director: 'Ruben Fleisher', releaseDate: 'October 2, 2009'},
    {imageName: 'starwarsep3', title: 'Star Wars: Episode III - Revenge of the Sith', director: 'George Lucas', releaseDate: 'May 9, 2005'},
    {imageName: 'godzillaking', title: 'Godzilla: King of the Monsters', director: 'Michael Dougherty', releaseDate: 'May 31, 2019'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}

class Movie {
  imageName!: string;
  title!: string;
  director!: string;
  releaseDate!: string;
}
