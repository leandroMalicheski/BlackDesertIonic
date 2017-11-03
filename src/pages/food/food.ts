import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { IngredientPage } from '../ingredient/ingredient';

@Component({
  selector: 'food',
  templateUrl: 'food.html'
})

export class FoodPage {
  food: any;
  filteredIngredients: any;
  foodForm: {qty:number};
  hideOtherCraftResult: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	if(navParams.get('item').ingredients){
      this.food = navParams.get('item');
    }else{  
      this.food = this.getFood(navParams.get('item').id);
    }
    this.foodForm = {"qty":0};
  	this.filteredIngredients = this.filterIngredients(this.food.ingredients);
  }

  calculate() {
  	for (let i = 0; i < this.filteredIngredients.length; i++) {
  		let ingredient = this.filteredIngredients[i];
  			  ingredient.qtyTotal = this.foodForm.qty * ingredient.qty;
  		this.filteredIngredients[i] = ingredient;
  	}
  }

  ingredientTapped(event, item){
    if(item.hasIngredientPage){
      this.navCtrl.push(IngredientPage, {item: item});
    }else if(item.hasFoodPage){
       this.navCtrl.push(FoodPage, {item: item});
    }
  }

  getFood(itemId) {
    var foodList = JSON.parse(sessionStorage.getItem('foodList'));
    for (var i = 0; i < foodList.length; i++) {
      if (foodList[i].id === itemId) {
        return foodList[i];
      }
    }
  }
  filterIngredients(ingredientsItemList){
    let ingredients = JSON.parse(sessionStorage.getItem('ingredients'));
    let filteredIngredients = [];

    for (let i = 0; i < ingredientsItemList.length; i++) {
      let ingredientTemp = ingredientsItemList[i];
      let ingredient = ingredients[ingredientTemp.id];
          ingredient.qty = ingredientTemp.qty;
          ingredient.qtyTotal = ingredientTemp.qty;
      filteredIngredients.push(ingredient);
    }
    return filteredIngredients;
  }
}