import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FoodPage } from '../food/food';
import { Food } from '../../classes/food';

@Component({
  selector: 'foodList',
  templateUrl: 'foodList.html'
})

export class FoodListPage {
  foodList: Array<Food>;
  foods: Array<Food>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.foodList = JSON.parse(sessionStorage.getItem('foodList'));
  	this.foods = JSON.parse(sessionStorage.getItem('foods'));    
  }

  foodTapped(event, item) {this.navCtrl.push(FoodPage, {item: item});}

}