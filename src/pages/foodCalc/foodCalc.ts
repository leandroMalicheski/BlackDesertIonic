import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FoodPage } from '../food/food';
import { IngredientPage } from '../ingredient/ingredient';

@Component({
  selector: 'foodCalc',
  templateUrl: 'foodCalc.html'
})

export class FoodCalcPage {
  foodList: Array<any>;
  ingredients: Array<any>;
  ingredientsList: Array<any>;
  foods: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.foodList = [
		  {"id":"0", "name":"Cerveja", "level":"Iniciante 1", "ingredients":[{"id":"0", "qty":5},{"id":"1", "qty":6},{"id":"2", "qty": 1},{"id":"3", "qty": 2}], "icon":"assets/img/foodAndIgredients/beer.png"},
      {"id":"1", "name":"Ração Orgânica", "level":"Aprendiz 6", "ingredients":[{"id":"6", "qty":2},{"id":"4", "qty":5},{"id":"7", "qty": 4},{"id":"5", "qty": 4}], "icon":"assets/img/foodAndIgredients/organicFeed.png"}
  	];
  	this.ingredientsList = [
  		{"id":"0", "name":"Cereais", "icon":"assets/img/foodAndIgredients/corn.png", "foods":[{"id":"0","qty":5}]},
      {"id":"7", "name":"Carne de Frango", "icon":"assets/img/foodAndIgredients/birdMeat.png", "foods":[{"id":"1","qty":4}]},
  	]
  	this.ingredients = [
  		{"id":"0", "name":"Milho", "icon":"assets/img/foodAndIgredients/corn.png"},
  		{"id":"1", "name":"Água Mineral", "icon":"assets/img/foodAndIgredients/mineralWater.png"},
  		{"id":"2", "name":"Açúcar", "icon":"assets/img/foodAndIgredients/sugar.png"},
  		{"id":"3", "name":"Fermento", "icon":"assets/img/foodAndIgredients/leavingAgent.png"},
      {"id":"4", "name":"Carne", "icon":"assets/img/foodAndIgredients/meat.png"},
      {"id":"5", "name":"Peixe Seco", "icon":"assets/img/foodAndIgredients/driedFish.png"},
      {"id":"6", "name":"Aveia", "icon":"assets/img/foodAndIgredients/oatmeal.png"},
      {"id":"7", "name":"Carne de Frango", "icon":"assets/img/foodAndIgredients/birdMeat.png"},
  	];
  	this.foods = [
  	  {"id":"0", "name":"Cerveja", "icon":"assets/img/foodAndIgredients/beer.png"},
      {"id":"1", "name":"Ração Orgânica", "icon":"assets/img/foodAndIgredients/organicFeed.png"}
    ];
  }

  foodTapped(event, item) {
    this.navCtrl.push(FoodPage, {
      item: item,
      ingredients: this.ingredients
    });
  }

  ingredientTapped(event, item) {
    this.navCtrl.push(IngredientPage, {
      item: item,
      foods: this.foods
    });
  }

}