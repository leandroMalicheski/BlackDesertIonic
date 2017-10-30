import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodPage } from '../food/food';

@Component({
  selector: 'imperialItem',
  templateUrl: 'imperialItem.html',
})

export class ImperialItemPage {
  imperialItem: any;
  craftMaterial: any;
  imperialItemForm: any;
  hideResult: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imperialItem = navParams.get('item');
    this.imperialItem.value = this.setImperialItemValue(this.imperialItem.price);
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
  	this.imperialItemForm.result = this.setImperialItemValue(this.imperialItem.price * this.imperialItemForm.qty);
  	this.imperialItemForm.qtyToCraft = this.imperialItem.qtyToCraft * this.imperialItemForm.qty;
  }

  itemTapped(){
    if(this.craftMaterial.hasFoodPage){
      this.navCtrl.push(FoodPage, {
        item: this.craftMaterial
      });
    }
  }

  setImperialItemValue(itemPrice){
    let value = itemPrice.toString();
    if(value.match("000")) {
      while(value.match("000")){ value = value.replace("000", "K"); }
      
      let strAfterLastK = value.substr(value.lastIndexOf("K"));
      if (strAfterLastK.match("00")){
        value = this.transformToKK(value);
      } else if(strAfterLastK.match("0")){
        
        if(value.length > 4){
         value = this.transformToKK(value);
        }else {
         value = value.substr(0, value.lastIndexOf("K")) + "0K";
        }
        
      }
    } else if(value.length > 3) {
      value = value.substr(0,3)+"."+value.substr(3)+",00";
    }
    return value;
  }

  transformToKK(value){
   let valueTemp = value.substr(0,1);
   valueTemp = valueTemp+","+value.substr(1);
   valueTemp = valueTemp.substr(0, valueTemp.lastIndexOf("K"));
   valueTemp = valueTemp + "KK";
   return valueTemp;
  }
}
