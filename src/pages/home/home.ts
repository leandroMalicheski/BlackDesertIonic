import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodListPage } from '../foodList/foodList';
import { FoodIngredientListPage } from '../foodIngredientList/foodIngredientList';
import { ImperialCookingListPage } from '../imperialCookingList/imperialCookingList';
import { HorsePage } from '../horse/horse';
import { FoodIngredient } from '../../classes/foodIngredient';
import { Food } from '../../classes/food';
import { ImperialItem } from '../../classes/imperialItem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  	this.createIngredients();
    this.createFoods();
    this.createImperialCooking(); 
    this.createTradeList();   
  }

  itemTapped(event, page){
    if(page === "ImperialCookingListPage"){
      page = ImperialCookingListPage;
    } else if (page === "HorsePage"){
      page = HorsePage;
    } else if (page === "FoodListPage"){
      page = FoodListPage;
    } else if (page === "FoodIngredientListPage"){
      page = FoodIngredientListPage;
    }
    this.navCtrl.push(page);    
  }

  createFoods(){
    let beerIngredients = [{"id":"0", "qty":5},{"id":"1", "qty":6},{"id":"2", "qty": 1},{"id":"6", "qty": 2}];
    let organicFeedIgredients = [{"id":"3", "qty":2},{"id":"4", "qty":5},{"id":"7", "qty": 4},{"id":"5", "qty": 4}];
    let boiledEggIngredients = [{"id":"14", "qty":3},{"id":"1", "qty":6},{"id":"12", "qty":1},{"id":"13", "qty":1}];
    let oatmealIngredients = [{"id":"8","qty":9},{"id":"9","qty":3},{"id":"10","qty":3},{"id":"11","qty":2}];    
    let friedFishIngredients = [{"id":"8","qty":3},{"id":"5","qty":2},{"id":"15","qty":2}];
    let fishFilletChipsIngredients = [{"id":"5","qty":2},{"id":"16","qty":3},{"id":"8","qty":7},{"id":"13","qty":2}];
    let meatStewIngredients = [{"id":"4","qty":5},{"id":"8","qty":2},{"id":"12","qty":2},{"id":"1","qty":3}];
    let omeleteIngredients = [{"id":"0","qty":5},{"id":"17","qty":2},{"id":"14","qty":5},{"id":"13","qty":2}];
    let honeycombCookieIngredients = [{"id":"11","qty":6},{"id":"14","qty":2},{"id":"9","qty":4},{"id":"18","qty":2}];
    let teaWithFineScentIngredients = [{"id":"19","qty":4},{"id":"20","qty":4},{"id":"1","qty":7},{"id":"11","qty":3}];
    let steakIngredientList = [{"id":"4","qty":8},{"id":"13","qty":2},{"id":"21","qty":2},{"id":"22","qty":2}];
    let fruitPuddingIngredientList = [{"id":"20","qty":5},{"id":"23","qty":1},{"id":"9","qty":3},{"id":"2","qty":2}];
    let softBreadIngredientList = [{"id":"18","qty":6},{"id":"6","qty":2},{"id":"14","qty":2},{"id":"9","qty":3}];
    let meatPieIngredients = [{"id":"4","qty":4},{"id":"18","qty":6},{"id":"3","qty":2},{"id":"17","qty":2}];
    let whiteSauceIngredients = [{"id":"24","qty":1},{"id":"9","qty":1},{"id":"20","qty":1},{"id":"12","qty":2}];
    let redSauceIngredients = [{"id":"24","qty":1},{"id":"2","qty":2},{"id":"4","qty":1},{"id":"1","qty":2}];

    let beerPlusCrafted = [{"name":"Cerveja Gelada"}];
    let boiledEggPlusCrafted = [{"name":"Ovo Cozido Atraente"}];
    let oatmealPlusCrafted = [{"name":"Aveia Refinada"}];
    let friedFishPlusCrafted = [{"name":"Peixe Frito Crocante"}];
    let fishFilletChipsPlusCrafted = [{"name":"Salgado de File de Peixe Delicioso"}];
    let meatStewPlusCrafted = [{"name":"Ensopado de Carne Forte"}];
    let omeletePlusCrafted = [{"name":"Omelete Macio"}];
    let honeycombCookiePlusCrafted = [{"name":"Biscoito de Mel Crocante"}];
    let teaWithFineScentPlusCrafted = [{"name":"Chá com Aroma Fino Forte"}];
    let steakPlusCrafted = [{"name":"Bife Suculento"}];
    let fruitPuddingPlusCrafted = [{"name":"Pudim de Frutas Especial"}];
    let softBreadPlusCrafted = [{"name":"Pão de Leite Úmido"}];
    let meatPiePlusCrafted = [{"name":"Torta de Carne Deliciosa"}];


    let beer = new Food ("0","Cerveja","Iniciante 1","assets/img/foodAndIgredients/beer.png",beerPlusCrafted,beerIngredients, true);
    let organicFeed = new Food ("1","Ração Orgânica","Aprendiz 6","assets/img/foodAndIgredients/organicFeedA.png", undefined, organicFeedIgredients, true);
    let boiledEgg = new Food ("2","Ovos de Pássaro Cozido", "Iniciante 6", "assets/img/foodAndIgredients/boiledEgg.png", boiledEggPlusCrafted, boiledEggIngredients,true);
    let oatmeal = new Food("3","Aveia","Aprendiz 1","assets/img/foodAndIgredients/oatmealA.png", oatmealPlusCrafted, oatmealIngredients, true);
    let friedFish = new Food ("4","Peixe Frito","Iniciante 1", "assets/img/foodAndIgredients/friedFish.png", friedFishPlusCrafted, friedFishIngredients,true);
    let fishFilletChips = new Food ("5", "Salgado de File de Peixe", "Aprendiz 1", "assets/img/foodAndIgredients/fishFilletChips.png", fishFilletChipsPlusCrafted, fishFilletChipsIngredients, true);
    let meatStew = new Food("6","Ensopado de Carne","Iniciante 6", "assets/img/foodAndIgredients/meatStew.png", meatStewPlusCrafted, meatStewIngredients, true);
    let omelete = new Food ("7","Omelete","Aprendiz 1","assets/img/foodAndIgredients/omelete.png", omeletePlusCrafted, omeleteIngredients, true);
    let honeycombCookie = new Food("8", "Biscoito de Mel", "Aprendiz 6", "assets/img/foodAndIgredients/honeycombCookie.png", honeycombCookiePlusCrafted, honeycombCookieIngredients, true);
    let teaWithFineScent = new Food("9", "Chá com Aroma Fino", "Aprendiz 1", "assets/img/foodAndIgredients/teaWithFineScent.png", teaWithFineScentPlusCrafted, teaWithFineScentIngredients, true);
    let steak = new Food("10","Bife","Aprendiz 1", "assets/img/foodAndIgredients/steak.png", steakPlusCrafted, steakIngredientList, true);
    let fruitPudding = new Food("11","Pudim de Frutas", "Iniciante 6", "assets/img/foodAndIgredients/fruitPudding.png", fruitPuddingPlusCrafted, fruitPuddingIngredientList, true);
    let softBread = new Food("12","Pão Macio","Iniciante 6", "assets/img/foodAndIgredients/softBread.png", softBreadPlusCrafted,softBreadIngredientList,true);
    let meatPie = new Food("13","Torta de Carne","Aprendiz 1", "assets/img/foodAndIgredients/meatPie.png", meatPiePlusCrafted, meatPieIngredients, true);
    let whiteSauce = new Food("14", "Molho Branco","Iniciante 1", "assets/img/foodAndIgredients/whiteSauce.png", undefined, whiteSauceIngredients, true);
    let redSauce = new Food("14", "Molho Vermelho","Iniciante 1", "assets/img/foodAndIgredients/redSauce.png", undefined, redSauceIngredients, true);
    
    let foodList = [beer, whiteSauce, redSauce, friedFish, boiledEgg, meatStew, fruitPudding, softBread, oatmeal, omelete, teaWithFineScent, steak, meatPie, fishFilletChips, organicFeed, honeycombCookie];
    sessionStorage.setItem('foodList', JSON.stringify(foodList));

    let foods = [beer, organicFeed, boiledEgg, oatmeal, friedFish, fishFilletChips, meatStew, omelete, honeycombCookie, teaWithFineScent, steak, fruitPudding, 
                  softBread, meatPie, whiteSauce,redSauce];
    sessionStorage.setItem('foods', JSON.stringify(foods)); 
  }
  
  createIngredients(){
    let cerealGeneratedFood = [{"id":"0","qty":5},{"id":"7","qty":5}];
    let oatmealGeneratedFood = [{"id":"1","qty":2},{"id":"13","qty":2}];
    let meatGeneratedFood = [{"id":"10","qty":8},{"id":"6","qty":5},{"id":"1","qty":5},{"id":"13","qty":4}];
    let driedFishGeneratedFood = [{"id":"1","qty":2},{"id":"4","qty":2},{"id":"5","qty":2}];
    let birdMeatGeneratedFood = [{"id":"1","qty":4}];
    let milkGeneratedFood = [{"id":"12","qty":3},{"id":"11","qty":3},{"id":"3","qty":3},{"id":"3","qty":3}];
    let honeyGeneratedFood = [{"id":"9","qty":3},{"id":"8","qty":6},{"id":"3","qty":3},{"id":"3","qty":2}];
    let eggGeneratedFood = [{"id":"2","qty":3},{"id":"7","qty":5},{"id":"8","qty":2},{"id":"12","qty":2}];
    let whiteSauceGeneratedFood = [{"id":"5","qty":3}]
    let roughGeneratedFood = [{"id":"13","qty":6},{"id":"12","qty":6},{"id":"8","qty":4}];  
    let fruitGeneratedFood = [{"id":"11","qty":5},{"id":"9","qty":4}];
    let redSauceGeneratedFood = [{"id":"10","qty":2}]

    let cereal = new FoodIngredient ("0","Cereais","assets/img/foodAndIgredients/corn.png", true, cerealGeneratedFood);
    let mineralWater = new FoodIngredient("1","Água Mineral","assets/img/foodAndIgredients/mineralWater.png", false, undefined);
    let sugar = new FoodIngredient("2","Açúcar","assets/img/foodAndIgredients/sugar.png",false, undefined);
    let oatmeal = new FoodIngredient("3","Aveia","assets/img/foodAndIgredients/oatmealA.png",true, oatmealGeneratedFood);
    let meat = new FoodIngredient("4","Carne","assets/img/foodAndIgredients/meat.png",true, meatGeneratedFood);
    let driedFish = new FoodIngredient("5","Peixe Desidratado","assets/img/foodAndIgredients/driedFish.png",true,driedFishGeneratedFood);
    let leavingAgent = new FoodIngredient("6","Fermento","assets/img/foodAndIgredients/leavingAgent.png",false, undefined);
    let birdMeat = new FoodIngredient("7","Carne de Pássaro","assets/img/foodAndIgredients/birdMeat.png",true, birdMeatGeneratedFood);
    let flour = new FoodIngredient("8","Farinha","assets/img/foodAndIgredients/flour.png",false, undefined);
    let milk = new FoodIngredient("9","Leite","assets/img/foodAndIgredients/milk.png",true, milkGeneratedFood);
    let onion = new FoodIngredient("10","Cebola","assets/img/foodAndIgredients/onion.png",false, undefined);
    let honey = new FoodIngredient("11","Mel","assets/img/foodAndIgredients/honey.png",true, honeyGeneratedFood);
    let wine = new FoodIngredient("12","Vinho","assets/img/foodAndIgredients/wine.png",false, undefined);
    let salt = new FoodIngredient("13","Sal","assets/img/foodAndIgredients/salt.png",false, undefined);
    let egg = new FoodIngredient("14","Ovos de Pássaro","assets/img/foodAndIgredients/egg.png",true, eggGeneratedFood);
    let fryingOil = new FoodIngredient("15","Oleo para Fritura","assets/img/foodAndIgredients/fryingOil.png",false, undefined);  
    let whiteSauce = new FoodIngredient("16","Molho Branco","assets/img/foodAndIgredients/whiteSauce.png",true, whiteSauceGeneratedFood);       
    let oliveOil = new FoodIngredient("17","Oleo de Oliva","assets/img/foodAndIgredients/oliveOil.png",false, undefined);       
    let rough = new FoodIngredient("18","Massa","assets/img/foodAndIgredients/rough.png",false, roughGeneratedFood);
    let plants = new FoodIngredient("19","Plantas","assets/img/foodAndIgredients/rose.png",false, undefined);
    let fruit = new FoodIngredient("20","Frutas","assets/img/foodAndIgredients/apple.png", true, fruitGeneratedFood);
    let garlic = new FoodIngredient("21","Alho","assets/img/foodAndIgredients/garlic.png",false, undefined);
    let redSauce = new FoodIngredient("22","Molho Vermelho","assets/img/foodAndIgredients/redSauce.png",true, redSauceGeneratedFood);
    let cream = new FoodIngredient("23","Creme","assets/img/foodAndIgredients/cream.png",false, undefined);
    let baseSauce = new FoodIngredient("24", "Molho Veid", "assets/img/foodAndIgredients/baseSauce.png", false, undefined);

    let ingredientsList = [cereal,meat,driedFish,birdMeat,milk,honey,egg,rough,fruit,oatmeal,whiteSauce, redSauce];
    sessionStorage.setItem('ingredientsList', JSON.stringify(ingredientsList));    
    
    let ingredients = [cereal,mineralWater,sugar,oatmeal,meat,driedFish,leavingAgent,birdMeat,flour,milk,onion,honey,wine,salt,egg,
                       fryingOil,whiteSauce,oliveOil,rough,plants,fruit,garlic,redSauce,cream,baseSauce];
    sessionStorage.setItem('ingredients', JSON.stringify(ingredients));
  }

  createImperialCooking(){
    let local = "Heidel, Altinova e Calpheon";
    let imperialCookingList = [
      new ImperialItem("0","Baú de Peixe Frito","assets/img/imperialItems/friedFishCookingBox.png","Aprendiz", local ,"4",20, true, 150000),
      new ImperialItem("1","Baú de Ovo Cozido de Pássaro","assets/img/imperialItems/boiledEggCookingBox.png","Aprendiz",local,"2",20, true, 138000),      
      new ImperialItem("2","Baú de Sopa de Carne","assets/img/imperialItems/meatStewCookingBox.png","Aprendiz",local,"6",20, true, 195000),
      new ImperialItem("3","Baú de File de Peixe","assets/img/imperialItems/fishFilletCookingBox.png","Proficiente",local,"5",20, true, 160000),
      new ImperialItem("5","Baú de Pão Macio","assets/img/imperialItems/softBreadCookingBox.png","Proficiente",local,"12",20, true, 192000),
      new ImperialItem("4","Baú de Pudim de Fruta","assets/img/imperialItems/fruitPuddingCookingBox.png","Proficiente",local,"11",20, true, 212000),
      new ImperialItem("6","Baú de Cheiroso de Chá com Aroma Fino","assets/img/imperialItems/goodSmellingCookingBox.png","Profissional",local,"9",30, true, 217000),
      new ImperialItem("7","Baú de Omelete","assets/img/imperialItems/omeleteCookingBox.png","Profissional",local,"7",40, true, 205000),
      new ImperialItem("8","Baú de Carne","assets/img/imperialItems/steakCookingBox.png","Profissional",local,"10",20, true, 242000),      
      new ImperialItem("9","Baú de Torta de Carne","assets/img/imperialItems/meatPieCookingBox.png","Profissional",local,"13",30, true, 210000), 
    ];
    sessionStorage.setItem('imperialCookingList', JSON.stringify(imperialCookingList));   
  }

  createTradeList(){
    let tradeList = [
      {"id":"0","name":"Caixa de Minério de Chumbo","workshopLevel":1,"value":1590,"itensToCraft":[{"id":"0","qty":10},{"id":"1","qty":1}],"icon":"assets/img/trades/crates/leadOreCrate.png"},
      {"id":"1","name":"Caixa de Minério de Cobre","workshopLevel":1,"value":1410,"itensToCraft":[{"id":"2","qty":10},{"id":"1","qty":1}],"icon":"assets/img/trades/crates/copperOreCrate.png"},
      {"id":"2","name":"Caixa de Minério de Estanho","workshopLevel":1,"value":1530,"itensToCraft":[{"id":"3","qty":10},{"id":"1","qty":1}],"icon":"assets/img/trades/crates/tinOreCrate.png"},
      {"id":"3","name":"Caixa de Minério de Ferro","workshopLevel":1,"value":1530,"itensToCraft":[{"id":"4","qty":10},{"id":"1","qty":1}],"icon":"assets/img/trades/crates/ironOreCrate.png"},
      {"id":"3","name":"Caixa de Minério de Zinco","workshopLevel":1,"value":1650,"itensToCraft":[{"id":"5","qty":10},{"id":"1","qty":1}],"icon":"assets/img/trades/crates/zincOreCrate.png"},
    ]
    sessionStorage.setItem('tradeList', JSON.stringify(tradeList));

    let itemsList = [
      {"id":"0","name":"Minério de Chumbo","icon":"assets/img/trades/items/leadOre.png"},
      {"id":"1","name":"Pó de Pedra Preta","icon":"assets/img/trades/items/blackStonePowder.png"},
      {"id":"2","name":"Minério de Cobre","icon":"assets/img/trades/items/copperOre.png"},
      {"id":"3","name":"Minério de Estanho","icon":"assets/img/trades/items/tinOre.png"},
      {"id":"4","name":"Minério de Ferro","icon":"assets/img/trades/items/ironOre.png"},
      {"id":"5","name":"Minério de Zinco","icon":"assets/img/trades/items/zincOre.png"},
    ]    
    sessionStorage.setItem('itemsList', JSON.stringify(itemsList));    
  }
}
