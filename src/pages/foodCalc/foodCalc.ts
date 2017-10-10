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
  ingredientsList: Array<any>;

  ingredients: Array<{id:string, name:string, icon:string, hasIngredientPage:boolean}>;
  foods: Array<{id:string, name:string, icon:string, hasFoodPage:boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ingredientsList = [
  		{"id":"0", "name":"Cereais", "icon":"assets/img/foodAndIgredients/corn.png", "foods":[{"id":"0","qty":5}]},
      {"id":"7", "name":"Carne de Frango", "icon":"assets/img/foodAndIgredients/birdMeat.png", "foods":[{"id":"1","qty":4}]},
      {"id":"14", "name":"Ovo", "icon":"assets/img/foodAndIgredients/egg.png", "foods":[{"id":"2","qty":3}]},
  	]
    sessionStorage.setItem('ingredientsList', JSON.stringify(this.ingredientsList));
    
  	this.ingredients = [
  		{"id":"0", "name":"Milho", "icon":"assets/img/foodAndIgredients/corn.png","hasIngredientPage":true},
  		{"id":"1", "name":"Água Mineral", "icon":"assets/img/foodAndIgredients/mineralWater.png","hasIngredientPage":false},
  		{"id":"2", "name":"Açúcar", "icon":"assets/img/foodAndIgredients/sugar.png","hasIngredientPage":false},
  		{"id":"3", "name":"Fermento", "icon":"assets/img/foodAndIgredients/leavingAgent.png","hasIngredientPage":false},
      {"id":"4", "name":"Carne", "icon":"assets/img/foodAndIgredients/meat.png","hasIngredientPage":false},
      {"id":"5", "name":"Peixe Seco", "icon":"assets/img/foodAndIgredients/driedFish.png","hasIngredientPage":false},
      {"id":"6", "name":"Aveia", "icon":"assets/img/foodAndIgredients/oatmealA.png","hasIngredientPage":false},
      {"id":"7", "name":"Carne de Frango", "icon":"assets/img/foodAndIgredients/birdMeat.png","hasIngredientPage":true},
      {"id":"8", "name":"Farinha","icon":"assets/img/foodAndIgredients/flour.png","hasIngredientPage":false},
      {"id":"9", "name":"Leite","icon":"assets/img/foodAndIgredients/milk.png","hasIngredientPage":false},
      {"id":"10","name":"Cebola","icon":"assets/img/foodAndIgredients/onion.png","hasIngredientPage":false},
      {"id":"11","name":"Mel","icon":"assets/img/foodAndIgredients/honey.png","hasIngredientPage":false},
      {"id":"12","name":"Vinho","icon":"assets/img/foodAndIgredients/wine.png","hasIngredientPage":false},
      {"id":"13","name":"Sal","icon":"assets/img/foodAndIgredients/salt.png","hasIngredientPage":false},
      {"id":"14","name":"Ovo","icon":"assets/img/foodAndIgredients/egg.png","hasIngredientPage":true},
      {"id":"15","name":"Oleo","icon":"assets/img/foodAndIgredients/fryingOil.png","hasIngredientPage":false},      
  	];
    sessionStorage.setItem('ingredients', JSON.stringify(this.ingredients));

    this.foodList = [
      {"id":"0", "name":"Cerveja", "level":"Iniciante 1", "ingredients":[{"id":"0", "qty":5},{"id":"1", "qty":6},{"id":"2", "qty": 1},{"id":"3", "qty": 2}], "icon":"assets/img/foodAndIgredients/beer.png"},
      {"id":"1", "name":"Ração Orgânica", "level":"Aprendiz 6", "ingredients":[{"id":"6", "qty":2},{"id":"4", "qty":5},{"id":"7", "qty": 4},{"id":"5", "qty": 4}], "icon":"assets/img/foodAndIgredients/organicFeedA.png"},
      {"id":"2", "name":"Ovo Cozido", "level":"Iniciante 6", "ingredients":[{"id":"14", "qty":3},{"id":"1", "qty":6},{"id":"12", "qty":1},{"id":"13", "qty":1}], "icon":"assets/img/foodAndIgredients/boiledEgg.png"},
      {"id":"3", "name":"Aveia", "level":"Aprendiz 1","ingredients":[{"id":"8","qty":9},{"id":"9","qty":3},{"id":"10","qty":3},{"id":"11","qty":2}],"icon":"assets/img/foodAndIgredients/oatmealA.png"},
      {"id":"4", "name":"Peixe Frito", "level":"Aprendiz 1","ingredients":[{"id":"8","qty":3},{"id":"5","qty":2},{"id":"15","qty":2}],"icon":"assets/img/foodAndIgredients/friedFish.png"},
    ];
    sessionStorage.setItem('foodList', JSON.stringify(this.foodList));

  	this.foods = [
  	  {"id":"0", "name":"Cerveja", "icon":"assets/img/foodAndIgredients/beer.png", "hasFoodPage":true},
      {"id":"1", "name":"Ração Orgânica", "icon":"assets/img/foodAndIgredients/organicFeedA.png", "hasFoodPage":true},
      {"id":"2", "name":"Ovo Cozido", "icon":"assets/img/foodAndIgredients/boiledEgg.png", "hasFoodPage":true},
      {"id":"3", "name":"Aveia", "icon":"assets/img/foodAndIgredients/oatmealA.png", "hasFoodPage":true},
      {"id":"4", "name":"Peixe Frito", "icon":"assets/img/foodAndIgredients/friedFish.png", "hasFoodPage":true},
      
    ];
    sessionStorage.setItem('foods', JSON.stringify(this.foods));    
  }

  foodTapped(event, item) {
    this.navCtrl.push(FoodPage, {
      item: item,
    });
  }

  ingredientTapped(event, item) {
    this.navCtrl.push(IngredientPage, {
      item: item,
    });
  }

}