import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImperialItemPage } from '../imperialItem/imperialItem';

@Component({
  selector: 'imperialCalc',
  templateUrl: 'imperialCalc.html',
})
export class ImperialCalcPage {
  
  imperialItemList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imperialItemList = JSON.parse(sessionStorage.getItem('imperialItemList'));
  }

  itemTapped(event, item){
  	this.navCtrl.push(ImperialItemPage, {
      item: item
    });
  }

}
