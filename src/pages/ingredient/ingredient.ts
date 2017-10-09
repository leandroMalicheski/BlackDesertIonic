import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'ingredient',
  templateUrl: 'ingredient.html'
})

export class IngredientPage {
  ingredient: any;
  foods: any;
  filteredFoods: any;
  ingredientForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ingredient = navParams.get('item');
  	this.foods = navParams.get('foods');
  	this.filteredFoods = [];
  	this.ingredientForm = {};
  	for (let i = 0; i < this.ingredient.foods.length; i++) {
  		var foodTemp = this.ingredient.foods[i];
  		var food = this.foods[foodTemp.id]
  			  food.qty = foodTemp.qty;
  		this.filteredFoods.push(food);
  	}
  }
  calculate() {
  	for (let i = 0; i < this.filteredFoods.length; i++) {
  		var food = this.filteredFoods[i];
  			food.qtyTotal = this.ingredientForm.qty / food.qty;
  		this.filteredFoods[i] = food;
  	}
  }

}