import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { IngredientPage } from '../foodIngredient/foodIngredient';
import { FoodIngredient } from '../../classes/foodIngredient';

@Component({
  selector: 'foodIngredientList',
  templateUrl: 'foodIngredientList.html'
})

export class FoodIngredientListPage {
  ingredientsList: Array<FoodIngredient>;
  ingredients: Array<FoodIngredient>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ingredientsList = JSON.parse(sessionStorage.getItem('ingredientsList'));
  	this.ingredients = JSON.parse(sessionStorage.getItem('ingredients'));
  }

  ingredientTapped(event, item) {this.navCtrl.push(IngredientPage, {item: item});}

}