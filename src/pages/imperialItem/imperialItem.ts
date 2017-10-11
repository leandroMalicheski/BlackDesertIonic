import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'imperialItem',
  templateUrl: 'imperialItem.html',
})
export class ImperialItemPage {
  imperialItem: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.imperialItem = navParams.get('item');
  }
}
