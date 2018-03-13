import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { IngredientPage } from '../foodIngredient/foodIngredient';

import { Food } from '../../classes/food';
import { FoodIngredient } from '../../classes/foodIngredient';
import { UtilsProvider } from '../../providers/utils/utils';

@Component({
  selector: 'food',
  templateUrl: 'food.html'
})

export class FoodPage {
  food: Food;
  filteredIngredients: Array<FoodIngredient>;
  foodForm: {qty:number, timeSpentToFinish: number};
  cookingClothes: {clothesLevel: number, isClothesOn: boolean, clothesIcon: string};
  cookingUtensil: {timeGrantByUtensil: string, utensilIcon: string};
  totalTimeSpent: string;
  utilsProviderLocal: UtilsProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams, public utilsProvider: UtilsProvider) {
    this.food = navParams.get('item');
    this.foodForm = {"qty":0, "timeSpentToFinish":10};
    this.cookingUtensil = {"timeGrantByUtensil":"+0","utensilIcon":"assets/img/utensils/cookingUtensil.png"};
    this.cookingClothes = {"clothesLevel":0,"isClothesOn":false,"clothesIcon":"assets/img/clothes/cookingClothes.png"};
  	this.utilsProviderLocal = utilsProvider;
    this.filteredIngredients = this.filterIngredients(this.food.ingredients);
  }

  calculate() {
  	for (let i = 0; i < this.filteredIngredients.length; i++) {
  		let ingredient = this.filteredIngredients[i];
  			  ingredient.qtyTotal = this.foodForm.qty * ingredient.qty;
  		this.filteredIngredients[i] = ingredient;
  	}
    this.calculateTimeSpent();    
  }

  ingredientTapped(event, item){
    if(item.hasIngredientPage){
      this.navCtrl.push(IngredientPage, {item: item});
    }else if(item.hasFoodPage){
      this.navCtrl.push(FoodPage, {item: item});
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

  calculateTimeSpent(){
    let signal = this.cookingUtensil.timeGrantByUtensil.substring(0,1);
    let timeGrantByUtensil = Number(this.cookingUtensil.timeGrantByUtensil.substring(1));
        timeGrantByUtensil = timeGrantByUtensil * this.foodForm.qty;
    let timeSpentCooking = this.foodForm.timeSpentToFinish * this.foodForm.qty;
    let timeGrantByClothes = 0;
    
    if(this.cookingClothes.isClothesOn){
      if(this.cookingClothes.clothesLevel === 5){
        timeGrantByClothes = 7 * this.foodForm.qty;
      }else{
        timeGrantByClothes = (this.cookingClothes.clothesLevel + 1) * this.foodForm.qty;
      }
    }
    
    let totalTimeSpent = timeSpentCooking - timeGrantByClothes;
    if(signal === "+"){
      totalTimeSpent = totalTimeSpent + timeGrantByUtensil;  
    }else{
      totalTimeSpent = totalTimeSpent - timeGrantByUtensil;  
    }

    let totalTimeSpentInMinutes = this.utilsProviderLocal.convertSecToMin(totalTimeSpent);
    if(totalTimeSpentInMinutes < 1){
      this.totalTimeSpent = totalTimeSpent + " Segundos.";
    }else if(totalTimeSpentInMinutes > 60){
      this.totalTimeSpent = this.utilsProviderLocal.transformHoursInHHMMSS(totalTimeSpent);
    }else{
      this.totalTimeSpent = this.utilsProviderLocal.transformMinutesInMMSS(totalTimeSpentInMinutes);
    }
    
  }
}