import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  title: string = "Favorite Movies";

  insidiousReleaseDate = new Date(2011, 3, 1);
  zombielandReleaseDate = new Date(2009, 9, 2);
  sithRevengeReleaseDate = new Date(2005, 4, 5);
  kingGojiraReleaseDate = new Date(2019, 4, 31);

  movies: Movie[] = [
    {imageName: 'insidious', title: 'Insidious', director: 'James Wan', releaseDate: this.insidiousReleaseDate},
    {imageName: 'zombieland', title: 'ZombieLand', director: 'Ruben Fleisher', releaseDate: this.zombielandReleaseDate},
    {imageName: 'starwarsep3', title: 'Star Wars: Episode III - Revenge of the Sith', director: 'George Lucas', releaseDate: this.sithRevengeReleaseDate},
    {imageName: 'godzillaking', title: 'Godzilla: King of the Monsters', director: 'Michael Dougherty', releaseDate: this.kingGojiraReleaseDate}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}

class Movie {
  imageName!: string;
  title!: string;
  director!: string;
  releaseDate!: Date;
}
