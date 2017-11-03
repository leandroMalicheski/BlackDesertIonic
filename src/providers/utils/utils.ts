import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(public http: Http) {}

  setItemValue(itemPrice){
    let value = itemPrice.toString();
    if (value.length <= 4){
    	value = value + ",00";
    } else if(value.length > 4 && value.length <= 6){
    	let valueTemp = value.substr(0,value.length - 3);
    	if(valueTemp)
    	value = valueTemp + "K";    	
    } else {
    	while(value.match("000")){ value = value.replace("000", "K"); }
    	if(value.length >= 4){
    		let valueTemp = value.substr(0,1);
    		value = valueTemp + "," + value.substr(1,1) + "KK";
    	}
    }
    return value;
  }  
}
