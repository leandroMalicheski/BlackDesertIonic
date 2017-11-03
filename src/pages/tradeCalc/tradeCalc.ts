import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TradeItemPage } from '../tradeItem/tradeItem';

@Component({
  selector: 'tradeCalc',
  templateUrl: 'tradeCalc.html',
})
export class TradeCalcPage {
  
  tradeList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tradeList = JSON.parse(sessionStorage.getItem('tradeList'));
  }

   itemTapped(event, item) {this.navCtrl.push(TradeItemPage, {item: item});}

}
