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
  	this.imperialItemList = [
  		{"id":"0","name":"Caixa de Peixe Frito", "icon":"assets/img/imperialItems/friedFishCookingBox.png","level":"Aprendiz 1","local":"Heidel"}
  	]
  }

  itemTapped(event, item){
  	this.navCtrl.push(ImperialItemPage, {
      item: item
    });
  }

}
