import { Component, OnInit } from '@angular/core';
import { Recipet } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipet[] = [
    new Recipet('A First Recipe', 'This is a wider card with supporting text below as a natural lead-in to additional content.', 'https://i.pinimg.com/236x/60/48/5c/60485c2abba825634328fe58c1c7c71c--romantic-dinner-recipes-romantic-dinners.jpg', 'First Recipe')
  ];
  constructor() { }

  ngOnInit() {
  }

}
