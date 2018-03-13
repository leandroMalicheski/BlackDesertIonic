import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImperialItemPage } from '../imperialItem/imperialItem';
import { ImperialItem } from '../../classes/imperialItem';

@Component({
  selector: 'ImperialCookingList',
  templateUrl: 'ImperialCookingList.html',
})
export class ImperialCookingListPage {
  
  imperialItemListAprendiz: Array<ImperialItem>;
  imperialItemListProficiente: Array<ImperialItem>;
  imperialItemListProfissional: Array<ImperialItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	let list = JSON.parse(sessionStorage.getItem('imperialCookingList'))
  	this.imperialItemListAprendiz = this.separateByLevel(list,"Aprendiz");
  	this.imperialItemListProficiente = this.separateByLevel(list,"Proficiente");
  	this.imperialItemListProfissional = this.separateByLevel(list,"Profissional");
  }

  separateByLevel(list,level){
  	let listResult = [];
  	for (var i = list.length - 1; i >= 0; i--) {
  		var item = list[i];
  		if(item.level === level){listResult.push(item);}
  	}
  	return listResult;
  }

  itemTapped(event, item){this.navCtrl.push(ImperialItemPage, {item: item});}
}
