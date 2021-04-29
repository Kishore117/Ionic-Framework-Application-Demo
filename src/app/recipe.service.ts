import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe.mode';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipe: Recipe[] = [
    {
      id: 'r1',
      title: 'Food',
      imageUrl: 'image',
      ingrediants: ['Food 01', 'Food 02', 'Food 03', 'Food 04']
    },
    {
      id: 'r2',
      title: 'Vehicle',
      imageUrl: 'image',
      ingrediants: ['Vehicle 01', 'Vehicle 02', 'Vehicle 03', 'Vehicle 04']
    },
    {
      id: 'r3',
      title: 'Flower',
      imageUrl: 'image',
      ingrediants: ['Flower 01', 'Flower 02', 'Flower 03', 'Flower 04']
    }
  ]

  constructor() { }

  getallrecipe() {
    return [...this.recipe];
  }

  getreceipe(recipeId:string) {
    return {
      ...this.recipe.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

}
