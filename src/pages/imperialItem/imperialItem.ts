import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodPage } from '../food/food';
import { UtilsProvider } from '../../providers/utils/utils';

@Component({
  selector: 'imperialItem',
  templateUrl: 'imperialItem.html',
})

export class ImperialItemPage {
  imperialItem: any;
  craftMaterial: any;
  imperialItemForm: any;
  hideResult: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public utilsProvider: UtilsProvider) {
  	this.imperialItem = navParams.get('item');
    this.imperialItem.value = utilsProvider.setItemValue(this.imperialItem.price);
  	this.imperialItemForm = {"result":this.imperialItem.value, "qtyToCraft": this.imperialItem.qtyToCraft};
  	this.hideResult = true;

  	if(this.imperialItem.hasFoodPage){
  	  this.craftMaterial = this.setImperialItemFood(this.imperialItem.cratfItemId);
  	}
  };

  setImperialItemFood(itemId){
  	let foods = JSON.parse(sessionStorage.getItem('foods'));
  	let craftMaterial : {id:string, name:string, icon:string, hasFoodPage:boolean};

  	for (let i = 0; i < foods.length; i++) {
      let food = foods[i];
      if(food.id === itemId){
        craftMaterial = {id : food.id, name : food.name, icon : food.icon, hasFoodPage : food.hasFoodPage}
      }
    }
    return craftMaterial;
  }

  calculate(){
  	this.hideResult = false;
  	this.imperialItemForm.result = this.utilsProvider.setItemValue(this.imperialItem.price * this.imperialItemForm.qty);
  	this.imperialItemForm.qtyToCraft = this.imperialItem.qtyToCraft * this.imperialItemForm.qty;
  }

  itemTapped(){
    if(this.craftMaterial.hasFoodPage){
      this.navCtrl.push(FoodPage, {item: this.craftMaterial});
    }
  }  
}
