import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'food',
  templateUrl: 'food.html'
})

export class FoodPage {
  food: any;
  ingredients: any;
  filteredIngredients: any;
  foodForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.food = navParams.get('item');
  	this.ingredients = navParams.get('ingredients');
  	this.filteredIngredients = [];
  	this.foodForm = {};
  	for (let i = 0; i < this.food.ingredients.length; i++) {
  		var ingredientTemp = this.food.ingredients[i];
  		var ingredient = this.ingredients[ingredientTemp.id]
  			ingredient.qty = ingredientTemp.qty;
  			ingredient.qtyTotal = ingredientTemp.qty;
  		this.filteredIngredients.push(ingredient);
  	}
  }
  calculate() {
	for (let i = 0; i < this.filteredIngredients.length; i++) {
		var ingredient = this.filteredIngredients[i];
			ingredient.qtyTotal = this.foodForm.qty * ingredient.qty;
		this.filteredIngredients[i] = ingredient;
	}
  }

}