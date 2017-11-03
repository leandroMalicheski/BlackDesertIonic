import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImperialItemPage } from '../imperialItem/imperialItem';

@Component({
  selector: 'ImperialCookingCalc',
  templateUrl: 'ImperialCookingCalc.html',
})
export class ImperialCookingCalcPage {
  
  imperialItemList: Array<{id:string, name:string, icon:string, level:string, local:string, cratfItemId:string, qtyToCraft:string, hasFoodPage:boolean, price:number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imperialItemList = JSON.parse(sessionStorage.getItem('imperialCookingList'));
  }

  itemTapped(event, item){this.navCtrl.push(ImperialItemPage, {item: item});}

}
