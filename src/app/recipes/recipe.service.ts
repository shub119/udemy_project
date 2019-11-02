import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/ShoppingListService";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipie',
            'This is simply a test',
            'https://www.maxpixel.net/static/photo/1x/Plated-Food-Doughnuts-Pastry-Recipe-Dessert-Donuts-3843547.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('milk', 20)
            ]),
        new Recipe('A Brownie', 'Test Againt',
            'https://www.maxpixel.net/static/photo/1x/Plated-Food-Doughnuts-Pastry-Recipe-Dessert-Donuts-3843547.jpg',
            [
                new Ingredient('buns', 1),
                new Ingredient('toast', 20)
            ])
    ];
    
    constructor(private ShoppingListService: ShoppingListService) { }
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ShoppingListService.addIngredients(ingredients);

    }
}