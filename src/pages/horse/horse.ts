import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'horse',
  templateUrl: 'horse.html',
})

export class HorsePage {
  tierTitle: string;
  filter: string;
  filteredList: any;
  horseList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.createHorseList();
    this.filterList("1");
    this.tierTitle = "Tier 1";
  };

  updateList(){
  	if(this.filter === "All") {
      this.tierTitle = "All Tiers";
    }else {
      this.tierTitle = "Tier " + this.filter; 
    }
    this.filterList(this.filter);
  }  

  filterList(filter){
    this.filteredList = [];
    if(filter === "All"){
      this.filteredList = this.horseList
    }else{
      for (let i = 0; i < this.horseList.length; i++) {
        let horse = this.horseList[i];
        if(horse.tier === filter){
          this.filteredList.push(this.horseList[i]);
        }
      }  
    }
  } 

  createHorseList(){
    this.horseList = [
      {"id":0,"tier":"1","code":"A","vel":103,"acc":103,"agi":103,"break":103,"icon":"assets/img/horse/tier1A.png"},
      {"id":1,"tier":"1","code":"B","vel":109,"acc":109,"agi":109,"break":109,"icon":"assets/img/horse/tier1B.png"},
      {"id":2,"tier":"2","code":"A","vel":112,"acc":112,"agi":112,"break":112,"icon":"assets/img/horse/tier2A.png"},
      {"id":3,"tier":"2","code":"B","vel":107.50,"acc":107.50,"agi":110.50,"break":110.50,"icon":"assets/img/horse/tier2B.png"},
      {"id":4,"tier":"2","code":"C","vel":106,"acc":106,"agi":112,"break":112,"icon":"assets/img/horse/tier2C.png"},
      {"id":5,"tier":"2","code":"D","vel":110.50,"acc":110.50,"agi":107.50,"break":107.50,"icon":"assets/img/horse/tier2D.png"},
      {"id":6,"tier":"3","code":"A","vel":112,"acc":112,"agi":112,"break":112,"icon":"assets/img/horse/tier3A.png"},
      {"id":7,"tier":"3","code":"B","vel":112,"acc":112,"agi":112,"break":112,"icon":"assets/img/horse/tier3B.png"},
      {"id":8,"tier":"3","code":"C","vel":113.50,"acc":113.50,"agi":110.50,"break":110.50,"icon":"assets/img/horse/tier3C.png"},
      {"id":9,"tier":"3","code":"D","vel":115,"acc":115,"agi":113.50,"break":113.50,"icon":"assets/img/horse/tier3D.png"},
      {"id":10,"tier":"3","code":"E","vel":112,"acc":112,"agi":112,"break":112,"icon":"assets/img/horse/tier3E.png"},
      {"id":11,"tier":"3","code":"F","vel":110.50,"acc":110.50,"agi":113.50,"break":113.50,"icon":"assets/img/horse/tier3F.png"},
      {"id":12,"tier":"4","code":"A","vel":116.50,"acc":116.50,"agi":113.50,"break":113.50,"icon":"assets/img/horse/tier4A.png"},
      {"id":13,"tier":"4","code":"B","vel":114,"acc":114,"agi":112,"break":112,"icon":"assets/img/horse/tier4B.png"},
      {"id":14,"tier":"4","code":"C","vel":117.50,"acc":117.50,"agi":119.50,"break":119.50,"icon":"assets/img/horse/tier4C.png"},
      {"id":15,"tier":"4","code":"D","vel":118,"acc":118,"agi":118,"break":118,"icon":"assets/img/horse/tier4D.png"},
      {"id":16,"tier":"4","code":"E","vel":119.50,"acc":119.50,"agi":115,"break":115,"icon":"assets/img/horse/tier4E.png"},
      {"id":17,"tier":"4","code":"F","vel":118.50,"acc":118.50,"agi":116.50,"break":116.50,"icon":"assets/img/horse/tier4F.png"},
      {"id":18,"tier":"4","code":"G","vel":113.50,"acc":113.50,"agi":110.50,"break":110.50,"icon":"assets/img/horse/tier4G.png"},
      {"id":19,"tier":"4","code":"H","vel":119.50,"acc":119.50,"agi":110.50,"break":110.50,"icon":"assets/img/horse/tier4H.png"},
      {"id":20,"tier":"4","code":"I","vel":114,"acc":114,"agi":118,"break":188,"icon":"assets/img/horse/tier4I.png"},
      {"id":21,"tier":"4","code":"J","vel":118.50,"acc":118.50,"agi":118,"break":118,"icon":"assets/img/horse/tier4J.png"},
      {"id":22,"tier":"4","code":"K","vel":118.50,"acc":118.50,"agi":115,"break":115,"icon":"assets/img/horse/tier4K.png"},
      {"id":23,"tier":"4","code":"L","vel":115,"acc":115,"agi":115,"break":115,"icon":"assets/img/horse/tier4L.png"},
      {"id":24,"tier":"4","code":"M","vel":113.50,"acc":113.50,"agi":110.50,"break":110.50,"icon":"assets/img/horse/tier4M.png"},
      {"id":25,"tier":"4","code":"N","vel":115,"acc":115,"agi":109,"break":109,"icon":"assets/img/horse/tier4N.png"},
      {"id":26,"tier":"4","code":"O","vel":112,"acc":112,"agi":112,"break":112,"icon":"assets/img/horse/tier4O.png"},
      {"id":27,"tier":"4","code":"P","vel":115,"acc":115,"agi":115,"break":115,"icon":"assets/img/horse/tier4P.png"},
      {"id":28,"tier":"4","code":"P","vel":118,"acc":118,"agi":118,"break":118,"icon":"assets/img/horse/tier4Q.png"},
      {"id":29,"tier":"5","code":"A","vel":116.50,"acc":116.50,"agi":113.50,"break":113.50,"icon":"assets/img/horse/tier5A.png"},
      {"id":30,"tier":"5","code":"B","vel":118,"acc":118,"agi":118,"break":118,"icon":"assets/img/horse/tier5B.png"},
      {"id":31,"tier":"5","code":"C","vel":118,"acc":118,"agi":118,"break":118,"icon":"assets/img/horse/tier5C.png"},
      {"id":32,"tier":"5","code":"D","vel":117.50,"acc":117.50,"agi":118,"break":118,"icon":"assets/img/horse/tier5D.png"},
      {"id":33,"tier":"5","code":"E","vel":118,"acc":118,"agi":118,"break":118,"icon":"assets/img/horse/tier5E.png"},
      {"id":34,"tier":"5","code":"F","vel":118.50,"acc":118.50,"agi":116.50,"break":116.50,"icon":"assets/img/horse/tier5F.png"},
      {"id":35,"tier":"5","code":"G","vel":116.50,"acc":116.50,"agi":113.50,"break":113.50,"icon":"assets/img/horse/tier5G.png"},
      {"id":36,"tier":"5","code":"H","vel":113.50,"acc":113.50,"agi":120.50,"break":120.50,"icon":"assets/img/horse/tier5H.png"},
      {"id":37,"tier":"5","code":"I","vel":123,"acc":123,"agi":118,"break":118,"icon":"assets/img/horse/tier5I.png"},
      {"id":38,"tier":"5","code":"J","vel":117.50,"acc":117.50,"agi":122.50,"break":122.50,"icon":"assets/img/horse/tier5J.png"},
      {"id":39,"tier":"5","code":"K","vel":122.50,"acc":122.50,"agi":107.50,"break":107.50,"icon":"assets/img/horse/tier5K.png"},
      {"id":40,"tier":"5","code":"L","vel":117.50,"acc":117.50,"agi":122.50,"break":122.50,"icon":"assets/img/horse/tier5L.png"},
      {"id":41,"tier":"5","code":"M","vel":115,"acc":115,"agi":121,"break":121,"icon":"assets/img/horse/tier5M.png"},
      {"id":42,"tier":"5","code":"N","vel":121,"acc":121,"agi":121,"break":121,"icon":"assets/img/horse/tier5N.png"},
      {"id":43,"tier":"5","code":"O","vel":118,"acc":118,"agi":118,"break":118,"icon":"assets/img/horse/tier5O.png"},
    ];
  }
}
