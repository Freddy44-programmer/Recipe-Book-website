import { ShoppingListService } from './../shopping-list/Shooping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
recipeChanged = new Subject<Recipe[]>();

 //private recipes: Recipe[] = [
    // new Recipe('Spaghetti Pie',
    //  'A mix of a pie and a pizza, this Italian-inspired dish from Better Homes and Gardens is comfort food at its best. Not only will you get a big bang for your money with accessible and economical ingredients, it will also deliver delightful flavors, making this an ideal everyday dish to feed your family. We found that mild or spicy Italian sausage gave the dish great flavor, but you could use lean ground beef or turkey instead.',
    //   'https://www.washingtonpost.com/resizer/yDOe4WHPk6n6yZPrqMiTsZIhMEo=/arc-anglerfish-washpost-prod-washpost/public/ROBCBUCRT76UT24BGTWJ5UKUAY.jpg' ,
    //    [
    //     new Ingredient('pound spaghetti ', 1),
    //     new Ingredient('pound ground beef (85 percent lean)', 1),
    //     new Ingredient('tablespoon olive oil', 1),
    //     new Ingredient('medium yellow onion, chopped', 1),
    //     new Ingredient('cups marinara sauce, homemade or store-bought', 2),
    //     new Ingredient('cup whole-milk ricotta cheese ', 2),
    //     new Ingredient('tablespoons minced fresh flat-leaf parsley ', 2),
    //     new Ingredient('large eggs ', 3),
    //     new Ingredient('cup plus 2 tablespoons grated Parmesan', 1),
    //     new Ingredient('cup shredded mozzarella', 1),
    //    ]),


    // new Recipe('Cucumber Sandwich',
    // 'This creamy, crunchy cucumber sandwich recipe strikes a lovely balance between decadent and light...',
    // 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F01%2Fcucumber-sandwich.jpg',
    // [
    //   new Ingredient('ounces cream cheese, at room temperature', 2),
    //   new Ingredient('tablespoon low-fat plain Greek yogurt', 1),
    //   new Ingredient('tablespoon sliced fresh chives', 1),
    //   new Ingredient('tablespoon chopped fresh dill', 1),
    //   new Ingredient('Teaspoon ground pepper', 1),
    //   new Ingredient('slices whole-wheat sandwich bread', 2),
    //   new Ingredient('cup thinly sliced English cucumber', 1)
    // ])
  //];
 private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);

  }

  addRecipe(recipe: Recipe){
         this.recipes.push(recipe);
         this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
this.recipes[index] = newRecipe;
this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
