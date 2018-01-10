import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FoodPage } from '../food/food';

import { Ingredient } from '../../classes/ingredient';

@Component({
  selector: 'ingredient',
  templateUrl: 'ingredient.html'
})

export class IngredientPage {
  ingredient: Ingredient;
  filteredFoods: any;
  ingredientForm: {qty:number};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ingredient = navParams.get('item');
    this.filteredFoods = this.filterFoods(this.ingredient.foodGeneratedList);

    this.ingredientForm = {"qty":0};
  }

  calculate() {
  	for (let i = 0; i < this.filteredFoods.length; i++) {
  		let food = this.filteredFoods[i];
  			  food.qtyTotal = this.ingredientForm.qty / food.qty;
  		this.filteredFoods[i] = food;
  	}
  }
  
  filterFoods(foodItemList){
    let foods = JSON.parse(sessionStorage.getItem('foods')); 
    let filteredFoods = [];
    
    for (let i = 0; i < foodItemList.length; i++) {
      let foodTemp = foodItemList[i];
      let food = foods[foodTemp.id]
          food.qty = foodTemp.qty;
      filteredFoods.push(food);
    }
    return filteredFoods;
  }

  foodTapped(event, item){
    if(item.hasFoodPage){this.navCtrl.push(FoodPage, {item: item});}
  }
}