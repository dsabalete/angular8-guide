import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Another Recipe','This is another simple test','https://c.pxhere.com/images/15/3d/9ee477ee62341b9480ce314b02f8-1417897.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

}
