import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';

@Component({
  selector: 'tradeItem',
  templateUrl: 'tradeItem.html',
})

export class TradeItemPage {
  tradeItem: any;
  craftList: any;
  filteredItens: any;
  tradeItemForm: any;
  hideResult: boolean;
  hideResultTime: boolean;
  hideHours: boolean;
  hideBoth: boolean;
  hideMinutes: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public utilsProvider: UtilsProvider) {
  	this.tradeItem = navParams.get('item');
    this.filteredItens = this.filterItensToCraft(this.tradeItem.itensToCraft);

    this.tradeItemForm = {"result":0, "qty": 1, "resultTime":2, "minutes":0, "resultHours":0,"resultMinutes":0};
    this.hideAllResults();
    
  };

  calculate(){
    let totalTimeMinutes = this.tradeItemForm.qty * this.tradeItemForm.minutes;
    this.tradeItemForm.resultHours = totalTimeMinutes / 60;
    this.tradeItemForm.resultMinutes = totalTimeMinutes % 60;
    this.tradeItemForm.result = this.utilsProvider.setItemValue(this.tradeItemForm.qty * this.tradeItem.value);
    this.tradeItemForm.resultHours = this.convertHoursToStr(this.tradeItemForm.resultHours);

    for(let i = 0; i < this.filteredItens.length; i++){
      this.filteredItens[i].qtyTotal = this.filteredItens[i].qty * this.tradeItemForm.qty;
    }

    this.showFilter(totalTimeMinutes);
  }

  filterItensToCraft(itemListToCraft){
    let itemList = JSON.parse(sessionStorage.getItem('itemsList'));
    let filteredItens = [];

    for (let i = 0; i < itemListToCraft.length; i++) {
      let ingredientTemp = itemListToCraft[i];
      let filteredItem = itemList[ingredientTemp.id];
          filteredItem.qty = ingredientTemp.qty;
          filteredItem.qtyTotal = ingredientTemp.qty;
      filteredItens.push(filteredItem);
    }
    return filteredItens;
  }

  hideAllResults(){
    this.hideResult = true;
    this.hideResultTime = true;
    this.hideHours = true;
    this.hideBoth = true;
    this.hideMinutes = true;
  }

  showAllResults(){
    this.hideResult = false;
    this.hideResultTime = false;
    this.hideHours = false;
    this.hideBoth = false;
    this.hideMinutes = false;
  }

  convertHoursToStr(itemToConvert){
    let itemStr = itemToConvert.toString();
    if(itemStr.match(".")){
      itemStr = itemStr.substr(0,itemStr.lastIndexOf("."));  
    }    
    return itemStr;
  }

  showFilter(totalTimeMinutes){
    if(this.tradeItemForm.resultHours >= 1 && this.tradeItemForm.resultMinutes > 1){
      this.showAllResults();
    }else if(totalTimeMinutes === 0){
      this.hideAllResults();
      this.hideResult = false;
    }else{
      if(this.tradeItemForm.resultHours >= 1){
        this.hideHours = false;
        this.hideMinutes = true;
      }else if(this.tradeItemForm.resultMinutes > 1){
        this.hideMinutes = false;
        this.hideHours = true;
      }  
      this.hideResultTime = false;
      this.hideResult = false;
    }
  }
}
