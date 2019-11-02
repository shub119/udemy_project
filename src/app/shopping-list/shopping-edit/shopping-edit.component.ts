import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../ShoppingListService';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('nameAmount') nameAmount: ElementRef
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  AddIngredient() {
    const ingredientName = this.nameInput.nativeElement.value
    const ingredientAmount = this.nameAmount.nativeElement.value
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)
    this.ShoppingListService.addIngredient(newIngredient);
  }
}
