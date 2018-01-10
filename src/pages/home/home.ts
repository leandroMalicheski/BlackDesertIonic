import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodCalcPage } from '../foodCalc/foodCalc';
import { IngredientCalcPage } from '../ingredientCalc/ingredientCalc';
import { ImperialCookingCalcPage } from '../imperialCookingCalc/imperialCookingCalc';
import { TradeCalcPage } from '../tradeCalc/tradeCalc';
import { HorsePage } from '../horse/horse';
import { Ingredient } from '../../classes/ingredient';
import { Food } from '../../classes/food';

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
    if(page === "ImperialCookingCalcPage"){
      page = ImperialCookingCalcPage;
    } else if (page === "HorsePage"){
      page = HorsePage;
    } else if (page === "FoodCalcPage"){
      page = FoodCalcPage;
    } else if (page === "IngredientCalcPage"){
      page = IngredientCalcPage;
    }
    this.navCtrl.push(page);    
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

  createImperialCooking(){
    let imperialCookingList = [
      {"id":"0","name":"Baú de Peixe Frito", "icon":"assets/img/imperialItems/friedFishCookingBox.png","level":"Aprendiz","local":"Heidel, Altinova e Calpheon","cratfItemId":"4","qtyToCraft":20, "hasFoodPage":true, "price":150000},
      {"id":"1","name":"Baú de Ovo Cozido de Pássaro", "icon":"assets/img/imperialItems/boiledEggCookingBox.png","level":"Aprendiz","local":"Heidel, Altinova e Calpheon","cratfItemId":"2","qtyToCraft":20, "hasFoodPage":true, "price":138000},      
      {"id":"2","name":"Baú de Sopa de Carne", "icon":"assets/img/imperialItems/meatStewCookingBox.png","level":"Aprendiz","local":"Heidel, Altinova e Calpheon","cratfItemId":"6","qtyToCraft":20, "hasFoodPage":true, "price":195000},
      {"id":"3","name":"Baú de File de Peixe", "icon":"assets/img/imperialItems/fishFilletCookingBox.png","level":"Proficiente","local":"Heidel, Altinova e Calpheon","cratfItemId":"5","qtyToCraft":20, "hasFoodPage":true, "price":160000},
      {"id":"4","name":"Baú de Pudim de Fruta", "icon":"assets/img/imperialItems/fruitPuddingCookingBox.png","level":"Proficiente","local":"Heidel, Altinova e Calpheon","cratfItemId":"11","qtyToCraft":20, "hasFoodPage":true, "price":212000},
      {"id":"5","name":"Baú de Pão Macio", "icon":"assets/img/imperialItems/softBreadCookingBox.png","level":"Proficiente","local":"Heidel, Altinova e Calpheon","cratfItemId":"12","qtyToCraft":20, "hasFoodPage":true, "price":192000},
      {"id":"6","name":"Baú de Cheiroso de Chá com Aroma Fino", "icon":"assets/img/imperialItems/goodSmellingCookingBox.png","level":"Profissional","local":"Heidel, Altinova e Calpheon","cratfItemId":"9","qtyToCraft":30, "hasFoodPage":true, "price":217000},
      {"id":"7","name":"Baú de Omelete", "icon":"assets/img/imperialItems/omeleteCookingBox.png","level":"Profissional","local":"Heidel, Altinova e Calpheon","cratfItemId":"7","qtyToCraft":40, "hasFoodPage":true, "price":205000},
      {"id":"8","name":"Baú de Carne", "icon":"assets/img/imperialItems/steakCookingBox.png","level":"Profissional","local":"Heidel, Altinova e Calpheon","cratfItemId":"10","qtyToCraft":20, "hasFoodPage":true, "price":242000},      
      {"id":"9","name":"Baú de Torta de Carne", "icon":"assets/img/imperialItems/meatPieCookingBox.png","level":"Profissional","local":"Heidel, Altinova e Calpheon","cratfItemId":"13","qtyToCraft":30, "hasFoodPage":true, "price":210000},      
    ];
    sessionStorage.setItem('imperialCookingList', JSON.stringify(imperialCookingList));   
  }

  createFoods(){
    let beerIngredients = [{"id":"0", "qty":5},{"id":"1", "qty":6},{"id":"2", "qty": 1},{"id":"6", "qty": 2}];
    let beerPlusCrafted = [{"name":"Cerveja Gelada"}];
    let beer = new Food ("0","Cerveja","Iniciante 1","assets/img/foodAndIgredients/beer.png",beerPlusCrafted,beerIngredients, true);
    let organicFeedIgredients = [{"id":"3", "qty":2},{"id":"4", "qty":5},{"id":"7", "qty": 4},{"id":"5", "qty": 4}];
    let organicFeed = new Food ("1","Ração Orgânica","Aprendiz 6","assets/img/foodAndIgredients/organicFeedA.png", undefined, organicFeedIgredients, true);
    let boiledEggIngredients = [{"id":"14", "qty":3},{"id":"1", "qty":6},{"id":"12", "qty":1},{"id":"13", "qty":1}];
    let boiledEggPlusCrafted = [{"name":"Ovo Cozido Atraente"}];
    let boiledEgg = new Food ("2","Ovos de Pássaro Cozido", "Iniciante 6", "assets/img/foodAndIgredients/boiledEgg.png", boiledEggPlusCrafted, boiledEggIngredients,true);
    let oatmealIngredients = [{"id":"8","qty":9},{"id":"9","qty":3},{"id":"10","qty":3},{"id":"11","qty":2}];
    let oatmealPlusCrafted = [{"name":"Aveia Refinada"}];
    let oatmeal = new Food("3","Aveia","Aprendiz 1","assets/img/foodAndIgredients/oatmealA.png", oatmealPlusCrafted, oatmealIngredients, true);
    let friedFishPlusCrafted = [{"name":"Peixe Frito Crocante"}];
    let friedFishIngredients = [{"id":"8","qty":3},{"id":"5","qty":2},{"id":"15","qty":2}];
    let friedFish = new Food ("4","Peixe Frito","Aprendiz 1", "assets/img/foodAndIgredients/friedFish.png", friedFishPlusCrafted, friedFishIngredients,true);
    let fishFilletChipsIngredients = [{"id":"5","qty":2},{"id":"16","qty":3},{"id":"8","qty":7},{"id":"13","qty":2}];
    let fishFilletChipsPlusCrafted = [{"name":"Salgado de File de Peixe Delicioso"}];
    let fishFilletChips = new Food ("5", "Salgado de File de Peixe", "Aprendiz 1", "assets/img/foodAndIgredients/fishFilletChips.png", fishFilletChipsPlusCrafted, fishFilletChipsIngredients, true);
    let meatStewIngredients = [{"id":"4","qty":5},{"id":"8","qty":2},{"id":"12","qty":2},{"id":"1","qty":3}];
    let meatStewPlusCrafted = [{"name":"Ensopado de Carne Forte"}];
    let meatStew = new Food("6","Ensopado de Carne","Iniciante 1", "assets/img/foodAndIgredients/meatStew.png", meatStewPlusCrafted, meatStewIngredients, true);
    let omeleteIngredients = [{"id":"0","qty":5},{"id":"17","qty":2},{"id":"14","qty":5},{"id":"13","qty":2}];
    let omeletePlusCrafted = [{"name":"Omelete Macio"}];
    let omelete = new Food ("7","Omelete","Aprendiz 1","assets/img/foodAndIgredients/omelete.png", omeletePlusCrafted, oatmealIngredients, true);
    let honeycombCookieIngredients = [{"id":"11","qty":6},{"id":"14","qty":2},{"id":"9","qty":4},{"id":"18","qty":2}];
    let honeycombCookiePlusCrafted = [{"name":"Biscoito de Mel Crocante"}];
    let honeycombCookie = new Food("8", "Biscoito de Mel", "Aprendiz 6", "assets/img/foodAndIgredients/honeycombCookie.png", honeycombCookiePlusCrafted, honeycombCookieIngredients, true);
    let teaWithFineScentIngredients = [{"id":"19","qty":4},{"id":"20","qty":4},{"id":"1","qty":7},{"id":"11","qty":3}];
    let teaWithFineScentPlusCrafted = [{"name":"Chá com Aroma Fino Forte"}];
    let teaWithFineScent = new Food("9", "Chá com Aroma Fino", "Aprendiz 1", "assets/img/foodAndIgredients/teaWithFineScent.png", teaWithFineScentPlusCrafted, teaWithFineScentIngredients, true);
    let steakIngredientList = [{"id":"4","qty":8},{"id":"13","qty":2},{"id":"21","qty":2},{"id":"22","qty":2}];
    let steakPlusCrafted = [{"name":"Bife Suculento"}];
    let steak = new Food("10","Bife","Aprendiz 1", "assets/img/foodAndIgredients/steak.png", steakPlusCrafted, steakIngredientList, true);
    let fruitPuddingIngredientList = [{"id":"20","qty":5},{"id":"23","qty":1},{"id":"9","qty":3},{"id":"2","qty":2}];
    let fruitPuddingPlusCrafted = [{"name":"Pudim de Frutas Especial"}];
    let fruitPudding = new Food("11","Pudim de Frutas", "Iniciante 6", "assets/img/foodAndIgredients/fruitPudding.png", fruitPuddingPlusCrafted, fruitPuddingIngredientList, true);
    let softBreadIngredientList = [{"id":"18","qty":6},{"id":"6","qty":2},{"id":"14","qty":2},{"id":"9","qty":3}];
    let softBreadPlusCrafted = [{"name":"Pão de Leite Úmido"}];
    let softBread = new Food("12","Pão Macio","Iniciante 6", "assets/img/foodAndIgredients/softBread.png", softBreadPlusCrafted,softBreadIngredientList,true);
    let meatPieIngredients = [{"id":"4","qty":4},{"id":"18","qty":6},{"id":"3","qty":2},{"id":"17","qty":2}];
    let meatPiePlusCrafted = [{"name":"Torta de Carne Deliciosa"}];
    let meatPie = new Food("13","Torta de Carne","Aprendiz 1", "assets/img/foodAndIgredients/meatPie.png", meatPiePlusCrafted, meatPieIngredients, true);
    let whiteSauceIngredients = [{"id":"24","qty":1},{"id":"9","qty":1},{"id":"20","qty":1},{"id":"12","qty":2}];
    let whiteSauce = new Food("14", "Molho Branco","Proficiente 1", "assets/img/foodAndIgredients/whiteSauce.png", undefined, whiteSauceIngredients, true);
    let redSauceIngredients = [{"id":"24","qty":1},{"id":"2","qty":2},{"id":"4","qty":1},{"id":"1","qty":2}];
    let redSauce = new Food("14", "Molho Vermelho","Proficiente 1", "assets/img/foodAndIgredients/redSauce.png", undefined, redSauceIngredients, true);

    let foodList = [beer, organicFeed, boiledEgg, oatmeal, friedFish, fishFilletChips, meatStew, omelete, honeycombCookie, teaWithFineScent, steak, fruitPudding, 
                    softBread, meatPie, whiteSauce, redSauce];
    sessionStorage.setItem('foodList', JSON.stringify(foodList));

    let foods = [beer, organicFeed, boiledEgg, oatmeal, friedFish, fishFilletChips, meatStew, omelete, honeycombCookie, teaWithFineScent, steak, fruitPudding, 
                  softBread, meatPie, whiteSauce,redSauce];
    sessionStorage.setItem('foods', JSON.stringify(foods)); 
  }
  
  createIngredients(){
    let cerealGeneratedFood = [{"id":"0","qty":5},{"id":"7","qty":5}];
    let cereal = new Ingredient ("0","Cereais","assets/img/foodAndIgredients/corn.png", true, cerealGeneratedFood);
    let mineralWater = new Ingredient("1","Água Mineral","assets/img/foodAndIgredients/mineralWater.png", false, undefined);
    let sugar = new Ingredient("2","Açúcar","assets/img/foodAndIgredients/sugar.png",false, undefined);
    let oatmealGeneratedFood = [{"id":"1","qty":2},{"id":13,"qty":2}];
    let oatmeal = new Ingredient("3","Aveia","assets/img/foodAndIgredients/oatmealA.png",true, oatmealGeneratedFood);
    let meatGeneratedFood = [{"id":"10","qty":8},{"id":"6","qty":5},{"id":"1","qty":5},{"id":"13","qty":4}];
    let meat = new Ingredient("4","Carne","assets/img/foodAndIgredients/meat.png",true, meatGeneratedFood);
    let driedFishGeneratedFood = [{"id":"1","qty":2},{"id":"4","qty":2},{"id":"5","qty":2}];
    let driedFish = new Ingredient("5","Peixe Desidratado","assets/img/foodAndIgredients/driedFish.png",true,driedFishGeneratedFood);
    let leavingAgent = new Ingredient("6","Fermento","assets/img/foodAndIgredients/leavingAgent.png",false, undefined);
    let birdMeatGeneratedFood = [{"id":"1","qty":4}];
    let birdMeat = new Ingredient("7","Carne de Pássaro","assets/img/foodAndIgredients/birdMeat.png",true, birdMeatGeneratedFood);
    let flour = new Ingredient("8","Farinha","assets/img/foodAndIgredients/flour.png",false, undefined);
    let milkGeneratedFood = [{"id":"12","qty":3},{"id":"11","qty":3},{"id":"3","qty":3},{"id":"3","qty":3}];
    let milk = new Ingredient("9","Leite","assets/img/foodAndIgredients/milk.png",true, milkGeneratedFood);
    let onion = new Ingredient("10","Cebola","assets/img/foodAndIgredients/onion.png",false, undefined);
    let honeyGeneratedFood = [{"id":"9","qty":3},{"id":"8","qty":6},{"id":"3","qty":3},{"id":"3","qty":2}];
    let honey = new Ingredient("11","Mel","assets/img/foodAndIgredients/honey.png",true, honeyGeneratedFood);
    let wine = new Ingredient("12","Vinho","assets/img/foodAndIgredients/wine.png",false, undefined);
    let salt = new Ingredient("13","Sal","assets/img/foodAndIgredients/salt.png",false, undefined);
    let eggGeneratedFood = [{"id":"2","qty":3},{"id":"7","qty":5},{"id":"8","qty":2},{"id":"12","qty":2}];
    let egg = new Ingredient("14","Ovos de Pássaro","assets/img/foodAndIgredients/egg.png",true, eggGeneratedFood);
    let fryingOil = new Ingredient("15","Oleo para Fritura","assets/img/foodAndIgredients/fryingOil.png",false, undefined);  
    let whiteSauceGeneratedFood = [{"id":"5","qty":3}]
    let whiteSauce = new Ingredient("16","Molho Branco","assets/img/foodAndIgredients/whiteSauce.png",true, whiteSauceGeneratedFood);       
    let oliveOil = new Ingredient("17","Oleo de Oliva","assets/img/foodAndIgredients/oliveOil.png",false, undefined);       
    let roughGeneratedFood = [{"id":"13","qty":6},{"id":"12","qty":6},{"id":"8","qty":4}];  
    let rough = new Ingredient("18","Massa","assets/img/foodAndIgredients/rough.png",false, roughGeneratedFood);
    let plants = new Ingredient("19","Plantas","assets/img/foodAndIgredients/rose.png",false, undefined);
    let fruitGeneratedFood = [{"id":"11","qty":5},{"id":"9","qty":4}];
    let fruit = new Ingredient("20","Frutas","assets/img/foodAndIgredients/apple.png", true, fruitGeneratedFood);
    let garlic = new Ingredient("21","Alho","assets/img/foodAndIgredients/garlic.png",false, undefined);
    let redSauceGeneratedFood = [{"id":"10","qty":2}]
    let redSauce = new Ingredient("22","Molho Vermelho","assets/img/foodAndIgredients/redSauce.png",true, redSauceGeneratedFood);
    let cream = new Ingredient("23","Creme","assets/img/foodAndIgredients/cream.png",false, undefined);
    let baseSauce = new Ingredient("24", "Molho Veid", "assets/img/foodAndIgredients/baseSauce.png", false, undefined);

    let ingredientsList = [cereal,meat,driedFish,birdMeat,milk,honey,egg,rough,fruit,oatmeal,whiteSauce, redSauce];
    sessionStorage.setItem('ingredientsList', JSON.stringify(ingredientsList));    
    
    let ingredients = [cereal,mineralWater,sugar,oatmeal,meat,driedFish,leavingAgent,birdMeat,flour,milk,onion,honey,wine,salt,egg,
                       fryingOil,whiteSauce,oliveOil,rough,plants,fruit,garlic,redSauce,cream,baseSauce];
    sessionStorage.setItem('ingredients', JSON.stringify(ingredients));
  }
}
