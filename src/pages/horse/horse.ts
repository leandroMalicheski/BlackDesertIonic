import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Horse } from '../../classes/horse';

@Component({
  selector: 'horse',
  templateUrl: 'horse.html',
})

export class HorsePage {
  tierTitle: string;
  filter: string;
  filteredList: Array<Horse>;
  horseList: Array<Horse>;

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
    this.horseList = [new Horse ("0","1","A",103,103,103,103,"assets/img/horse/tier1A.png"),
      new Horse ("1","1","B",109,109,109,109,"assets/img/horse/tier1B.png"),
      new Horse ("2","2","A",112,112,112,112,"assets/img/horse/tier2A.png"),
      new Horse ("3","2","B",107.50,107.50,110.50,110.50,"assets/img/horse/tier2B.png"),
      new Horse ("4","2","C",106,106,112,112,"assets/img/horse/tier2C.png"),
      new Horse ("5","2","D",110.50,110.50,107.50,107.50,"assets/img/horse/tier2D.png"),
      new Horse ("6","3","A",112,112,112,112,"assets/img/horse/tier3A.png"),
      new Horse ("7","3","B",112,112,112,112,"assets/img/horse/tier3B.png"),
      new Horse ("8","3","C",113.50,113.50,110.50,110.50,"assets/img/horse/tier3C.png"),
      new Horse ("9","3","D",115,115,113.50,113.50,"assets/img/horse/tier3D.png"),
      new Horse ("10","3","E",112,112,112,112,"assets/img/horse/tier3E.png"),
      new Horse ("11","3","F",110.50,110.50,113.50,113.50,"assets/img/horse/tier3F.png"),
      new Horse ("12","4","A",116.50,116.50,113.50,113.50,"assets/img/horse/tier4A.png"),
      new Horse ("13","4","B",114,114,112,112,"assets/img/horse/tier4B.png"),
      new Horse ("14","4","C",117.50,117.50,119.50,119.50,"assets/img/horse/tier4C.png"),
      new Horse ("15","4","D",118,118,118,118,"assets/img/horse/tier4D.png"),
      new Horse ("16","4","E",119.50,119.50,115,115,"assets/img/horse/tier4E.png"),
      new Horse ("17","4","F",118.50,118.50,116.50,116.50,"assets/img/horse/tier4F.png"),
      new Horse ("18","4","G",113.50,113.50,110.50,110.50,"assets/img/horse/tier4G.png"),
      new Horse ("19","4","H",119.50,119.50,110.50,110.50,"assets/img/horse/tier4H.png"),
      new Horse ("20","4","I",114,114,118,188,"assets/img/horse/tier4I.png"),
      new Horse ("21","4","J",118.50,118.50,118,118,"assets/img/horse/tier4J.png"),
      new Horse ("22","4","K",118.50,118.50,115,115,"assets/img/horse/tier4K.png"),
      new Horse ("23","4","L",115,115,115,115,"assets/img/horse/tier4L.png"),
      new Horse ("24","4","M",113.50,113.50,110.50,110.50,"assets/img/horse/tier4M.png"),
      new Horse ("25","4","N",115,115,109,109,"assets/img/horse/tier4N.png"),
      new Horse ("26","4","O",112,112,112,112,"assets/img/horse/tier4O.png"),
      new Horse ("27","4","P",115,115,115,115,"assets/img/horse/tier4P.png"),
      new Horse ("28","4","P",118,118,118,118,"assets/img/horse/tier4Q.png"),
      new Horse ("29","5","A",116.50,116.50,113.50,113.50,"assets/img/horse/tier5A.png"),
      new Horse ("30","5","B",118,118,118,118,"assets/img/horse/tier5B.png"),
      new Horse ("31","5","C",118,118,118,118,"assets/img/horse/tier5C.png"),
      new Horse ("32","5","D",117.50,117.50,118,118,"assets/img/horse/tier5D.png"),
      new Horse ("33","5","E",118,118,118,118,"assets/img/horse/tier5E.png"),
      new Horse ("34","5","F",118.50,118.50,116.50,116.50,"assets/img/horse/tier5F.png"),
      new Horse ("35","5","G",116.50,116.50,113.50,113.50,"assets/img/horse/tier5G.png"),
      new Horse ("36","5","H",113.50,113.50,120.50,120.50,"assets/img/horse/tier5H.png"),
      new Horse ("37","5","I",123,123,118,118,"assets/img/horse/tier5I.png"),
      new Horse ("38","5","J",117.50,117.50,122.50,122.50,"assets/img/horse/tier5J.png"),
      new Horse ("39","5","K",122.50,122.50,107.50,107.50,"assets/img/horse/tier5K.png"),
      new Horse ("40","5","L",117.50,117.50,122.50,122.50,"assets/img/horse/tier5L.png"),
      new Horse ("41","5","M",115,115,121,121,"assets/img/horse/tier5M.png"),
      new Horse ("42","5","N",121,121,121,121,"assets/img/horse/tier5N.png"),
      new Horse ("43","5","O",118,118,118,118,"assets/img/horse/tier5O.png"),
    ];
  }
}
