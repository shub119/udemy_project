import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './ShoppingListService';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  indreients: Ingredient[];
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.indreients = this.ShoppingListService.getIngredients();
    this.ShoppingListService.ingredientsChanged
    .subscribe((ingredient: Ingredient[])=> {
       this.indreients = ingredient;
    })
  }

}
