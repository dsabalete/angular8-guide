import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple test','https://www.nps.gov/subjects/camping/images/recipe_1.jpg'),
    new Recipe('Another Recipe','This is another simple test','https://storage.googleapis.com/needpix-storage/rsynced_items/zucchini-wraps-1967456_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
