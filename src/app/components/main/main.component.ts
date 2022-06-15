import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  firstName: string = "Dominic";
  lastName: string = "DiMarcello"
  show!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  isShown(): void {
    this.show = true;
  }

  isNotShown(): void {
    this.show = false;
  }

}
