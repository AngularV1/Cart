import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  categories: { id: number, name: string }[] = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing and Fashion" },
    { id: 3, name: "Home and Furniture" },
    { id: 4, name: "Books and Media" },
    { id: 5, name: "Sports and Outdoors" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
