import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { IngredientPage } from '../ingredient/ingredient';

@Component({
  selector: 'ingredientCalc',
  templateUrl: 'ingredientCalc.html'
})

export class IngredientCalcPage {
  ingredientsList: Array<any>;

  ingredients: Array<{id:string, name:string, icon:string, hasIngredientPage:boolean, hasFoodPage:boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.ingredientsList = JSON.parse(sessionStorage.getItem('ingredientsList'));
  	this.ingredients = JSON.parse(sessionStorage.getItem('ingredients'));
  }

  ingredientTapped(event, item) {
    this.navCtrl.push(IngredientPage, {
      item: item,
    });
  }

}