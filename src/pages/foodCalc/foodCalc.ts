import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FoodPage } from '../food/food';

@Component({
  selector: 'foodCalc',
  templateUrl: 'foodCalc.html'
})

export class FoodCalcPage {
  foodList: Array<any>;
  foods: Array<{id:string, name:string, icon:string, hasFoodPage:boolean}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.foodList = JSON.parse(sessionStorage.getItem('foodList'));
  	this.foods = JSON.parse(sessionStorage.getItem('foods'));    
  }

  foodTapped(event, item) {this.navCtrl.push(FoodPage, {item: item});}

}