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

  ingredients: Array<{id:string, name:string, icon:string, hasIngredientPage:boolean, hasFoodPage:boolean}>;
  foods: Array<{id:string, name:string, icon:string, hasFoodPage:boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ingredientsList = JSON.parse(sessionStorage.getItem('ingredientsList'));
  	this.ingredients = JSON.parse(sessionStorage.getItem('ingredients'));
    this.foodList = JSON.parse(sessionStorage.getItem('foodList'));
  	this.foods = JSON.parse(sessionStorage.getItem('foods'));    
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