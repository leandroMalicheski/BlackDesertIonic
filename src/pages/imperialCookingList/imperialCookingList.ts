import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImperialItemPage } from '../imperialItem/imperialItem';
import { ImperialItem } from '../../classes/imperialItem';

@Component({
  selector: 'ImperialCookingList',
  templateUrl: 'ImperialCookingList.html',
})
export class ImperialCookingListPage {
  
  imperialItemList: Array<ImperialItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imperialItemList = JSON.parse(sessionStorage.getItem('imperialCookingList'));
  }

  itemTapped(event, item){this.navCtrl.push(ImperialItemPage, {item: item});}
}
