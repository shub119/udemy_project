import { RecipeService } from "../recipes/recipe.service";
import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    constructor() { }
    private indreients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ]
    ingredientsChanged = new EventEmitter<Ingredient[]>()

    getIngredients() {
       return this.indreients.slice();
    }

    addIngredient(ingredient :Ingredient){
        this.indreients.push(ingredient);
        this.ingredientsChanged.emit(this.indreients.slice());
    }

    addIngredients(indreients: Ingredient[]){
    //   for(let ingredient of indreients){
    //       this.addIngredient(ingredient);
    //   }
    this.indreients.push(...indreients);
    this.ingredientsChanged.emit(this.indreients.slice());
    }
}
