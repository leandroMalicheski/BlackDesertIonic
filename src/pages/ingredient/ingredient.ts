import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { FoodPage } from '../food/food';

@Component({
  selector: 'ingredient',
  templateUrl: 'ingredient.html'
})

export class IngredientPage {
  ingredient: any;
  filteredFoods: any;
  ingredientForm: {qty:number};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.get('item').foods){
        this.ingredient = navParams.get('item');
    }else{
       this.ingredient = this.getIngredient(navParams.get('item').id);
    }
    this.ingredientForm = {"qty":0};
    this.filteredFoods = this.filterFoods(this.ingredient.foods)
  }

  calculate() {
  	for (let i = 0; i < this.filteredFoods.length; i++) {
  		var food = this.filteredFoods[i];
  			  food.qtyTotal = this.ingredientForm.qty / food.qty;
  		this.filteredFoods[i] = food;
  	}
  }

  foodTapped(event, item){
    if(item.hasFoodPage){this.navCtrl.push(FoodPage, {item: item});}
  }

  getIngredient(itemId) {
    var ingredientList = JSON.parse(sessionStorage.getItem('ingredientsList'));
    for (var i = 0; i < ingredientList.length; i++) {
      if (ingredientList[i].id === itemId) {return ingredientList[i];}
    }
  }

  filterFoods(foodItemList){
    var foods = JSON.parse(sessionStorage.getItem('foods')); 
    var filteredFoods = [];
    
    for (let i = 0; i < foodItemList.length; i++) {
      var foodTemp = foodItemList[i];
      var food = foods[foodTemp.id]
          food.qty = foodTemp.qty;
      filteredFoods.push(food);
    }
    return filteredFoods;
  }
}