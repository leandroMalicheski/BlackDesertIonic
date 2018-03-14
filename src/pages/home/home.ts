import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodListPage } from '../foodList/foodList';
import { FoodIngredientListPage } from '../foodIngredientList/foodIngredientList';
import { ImperialCookingListPage } from '../imperialCookingList/imperialCookingList';
import { HorsePage } from '../horse/horse';
import { FoodIngredient } from '../../classes/foodIngredient';
import { Food } from '../../classes/food';
import { RecipeItem } from '../../classes/recipeItem';
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
    let beer = new Food ("0","Cerveja","Iniciante 1","assets/img/foodAndIgredients/beer.png",[{"name":"Cerveja Gelada"}],
      [new RecipeItem("0",5),new RecipeItem("1",6),new RecipeItem("2",1),new RecipeItem("6", 2)], true);
    let organicFeed = new Food ("1","Ração Orgânica","Aprendiz 6","assets/img/foodAndIgredients/organicFeedA.png", undefined, 
      [new RecipeItem("3",2),new RecipeItem("4",5),new RecipeItem("7",4),new RecipeItem("5",4)], true);
    let boiledEgg = new Food ("2","Ovos de Pássaro Cozido", "Iniciante 6", "assets/img/foodAndIgredients/boiledEgg.png", [{"name":"Ovo Cozido Atraente"}], 
      [new RecipeItem("14",3),new RecipeItem("1",6),new RecipeItem("12",1),new RecipeItem("13",1)],true);
    let oatmeal = new Food("3","Aveia","Aprendiz 1","assets/img/foodAndIgredients/oatmealA.png", [{"name":"Aveia Refinada"}], 
      [new RecipeItem("8",9),new RecipeItem("9",3),new RecipeItem("10",3),new RecipeItem("11",2)], true);
    let friedFish = new Food ("4","Peixe Frito","Iniciante 1", "assets/img/foodAndIgredients/friedFish.png", [{"name":"Peixe Frito Crocante"}], 
      [new RecipeItem("8",3),new RecipeItem("5",2),new RecipeItem("15",2)],true);
    let fishFilletChips = new Food ("5", "Salgado de File de Peixe", "Aprendiz 1", "assets/img/foodAndIgredients/fishFilletChips.png", [{"name":"Salgado de File de Peixe Delicioso"}], 
      [new RecipeItem("5",2),new RecipeItem("16",3),new RecipeItem("8",7),new RecipeItem("13",2)], true);
    let meatStew = new Food("6","Ensopado de Carne","Iniciante 6", "assets/img/foodAndIgredients/meatStew.png", [{"name":"Ensopado de Carne Forte"}], 
      [new RecipeItem("4",5),new RecipeItem("8",2),new RecipeItem("12",2),new RecipeItem("1",3)], true);
    let omelete = new Food ("7","Omelete","Aprendiz 1","assets/img/foodAndIgredients/omelete.png", [{"name":"Omelete Macio"}], 
      [new RecipeItem("0",5),new RecipeItem("17",2),new RecipeItem("14",5),new RecipeItem("13",2)], true);
    let honeycombCookie = new Food("8", "Biscoito de Mel", "Aprendiz 6", "assets/img/foodAndIgredients/honeycombCookie.png", [{"name":"Biscoito de Mel Crocante"}], 
      [new RecipeItem("11",6),new RecipeItem("14",2),new RecipeItem("9",4),new RecipeItem("18",2)], true);
    let teaWithFineScent = new Food("9", "Chá com Aroma Fino", "Aprendiz 1", "assets/img/foodAndIgredients/teaWithFineScent.png", [{"name":"Chá com Aroma Fino Forte"}], 
      [new RecipeItem("19",4),new RecipeItem("20",4),new RecipeItem("1",7),new RecipeItem("11",3)], true);
    let steak = new Food("10","Bife","Aprendiz 1", "assets/img/foodAndIgredients/steak.png", [{"name":"Bife Suculento"}], 
      [new RecipeItem("4",8),new RecipeItem("13",2),new RecipeItem("21",2),new RecipeItem("22",2)], true);
    let fruitPudding = new Food("11","Pudim de Frutas", "Iniciante 6", "assets/img/foodAndIgredients/fruitPudding.png", [{"name":"Pudim de Frutas Especial"}], 
      [new RecipeItem("20",5),new RecipeItem("23",1),new RecipeItem("9",3),new RecipeItem("2",2)], true);
    let softBread = new Food("12","Pão Macio","Iniciante 6", "assets/img/foodAndIgredients/softBread.png", [{"name":"Pão de Leite Úmido"}],
      [new RecipeItem("18",6),new RecipeItem("6",2),new RecipeItem("14",2),new RecipeItem("9",3)],true);
    let meatPie = new Food("13","Torta de Carne","Aprendiz 1", "assets/img/foodAndIgredients/meatPie.png", [{"name":"Torta de Carne Deliciosa"}], 
      [new RecipeItem("4",4),new RecipeItem("18",6),new RecipeItem("3",2),new RecipeItem("17",2)], true);
    let whiteSauce = new Food("14", "Molho Branco","Iniciante 1", "assets/img/foodAndIgredients/whiteSauce.png", undefined, 
      [new RecipeItem("24",1),new RecipeItem("9",1),new RecipeItem("20",1),new RecipeItem("12",2)], true);
    let redSauce = new Food("15", "Molho Vermelho","Iniciante 1", "assets/img/foodAndIgredients/redSauce.png", undefined, 
      [new RecipeItem("24",1),new RecipeItem("2",2),new RecipeItem("4",1),new RecipeItem("1",2)], true);
    let meatCroquette = new Food("16", "Croquete de Carne","Aprendiz 6","assets/img/foodAndIgredients/meatCroquette.png", [{"name":"Croquete crocante de Carne"}], 
      [new RecipeItem("4",8),new RecipeItem("8",5),new RecipeItem("14",2),new RecipeItem("25",2),new RecipeItem("15",4)], true);
    let gratinCheese = new Food("17", "Queijo Gratin","Profissional 3","assets/img/foodAndIgredients/gratinCheese.png",[{"name":"Queijo Gratin Gostoso"}],
      [new RecipeItem("27",1),new RecipeItem("18",5),new RecipeItem("28",4),new RecipeItem("25",3),new RecipeItem("15",3)], true);
    let grilledSausage = new Food("27", "Salsicha Grelhada","Proficiente 5","assets/img/foodAndIgredients/grilledSausage.png",[{"name":"Linguiça Defumada"}], 
      [new RecipeItem("4",6), new RecipeItem("10",1), new RecipeItem("26",2), new RecipeItem("13",2)], true);
    let desertDumpling = new Food("18","Bolinho do Deserto","Proficiente 9","assets/img/foodAndIgredients/desertDumpling.png",[{"name":"Bolinho do Deserto Gostoso"}],
      [new RecipeItem("29",6), new RecipeItem("18",6), new RecipeItem("30",1), new RecipeItem("17",2)], true);
    let honeyWine = new Food("19","Vinho de Mel","Proficiente 9","assets/img/foodAndIgredients/honeyWine.png",[{"name":"Vinho de Mel Picante"}],
      [new RecipeItem("11",3), new RecipeItem("31",2), new RecipeItem("2",2), new RecipeItem("1",6), true]);
    let liquorEssence = new Food("20", "Essência de Liquor","Proficiente 1","assets/img/foodAndIgredients/liquorEssence.png", undefined,
      [new RecipeItem("8",1), new RecipeItem("20",1), new RecipeItem("6",1)], true);

    let foodList = [oatmeal, steak, honeycombCookie, desertDumpling, beer, teaWithFineScent, meatCroquette, meatStew, liquorEssence, whiteSauce, redSauce, omelete, boiledEgg, softBread, friedFish, fruitPudding, gratinCheese, organicFeed, fishFilletChips, grilledSausage, meatPie, honeyWine];
    sessionStorage.setItem('foodList', JSON.stringify(foodList));

    /* Must be added following ID order */
    let foods = [beer, organicFeed, boiledEgg, oatmeal, friedFish, fishFilletChips, meatStew, omelete, honeycombCookie, teaWithFineScent, steak, fruitPudding, 
                  softBread, meatPie, whiteSauce,redSauce,meatCroquette,gratinCheese,grilledSausage,desertDumpling, honeyWine, liquorEssence];
    sessionStorage.setItem('foods', JSON.stringify(foods)); 
  }
  
  createIngredients(){
    let cereal = new FoodIngredient ("0","Cereais","assets/img/foodAndIgredients/corn.png", true, [{"id":"0","qty":5},{"id":"7","qty":5}]);
    let mineralWater = new FoodIngredient("1","Água Mineral","assets/img/foodAndIgredients/mineralWater.png", false, undefined);
    let sugar = new FoodIngredient("2","Açúcar","assets/img/foodAndIgredients/sugar.png",false, undefined);
    let oatmeal = new FoodIngredient("3","Aveia","assets/img/foodAndIgredients/oatmealA.png",true, [{"id":"1","qty":2},{"id":"13","qty":2}]);
    let meat = new FoodIngredient("4","Carne","assets/img/foodAndIgredients/meat.png",true, [{"id":"10","qty":8},{"id":"6","qty":5},{"id":"1","qty":5},{"id":"13","qty":4}]);
    let driedFish = new FoodIngredient("5","Peixe Desidratado","assets/img/foodAndIgredients/driedFish.png",true,[{"id":"1","qty":2},{"id":"4","qty":2},{"id":"5","qty":2}]);
    let leavingAgent = new FoodIngredient("6","Fermento","assets/img/foodAndIgredients/leavingAgent.png",false, undefined);
    let birdMeat = new FoodIngredient("7","Carne de Pássaro","assets/img/foodAndIgredients/birdMeat.png",true, [{"id":"1","qty":4}]);
    let flour = new FoodIngredient("8","Farinha","assets/img/foodAndIgredients/flour.png",false, undefined);
    let milk = new FoodIngredient("9","Leite","assets/img/foodAndIgredients/milk.png",true, [{"id":"12","qty":3},{"id":"11","qty":3},{"id":"3","qty":3},{"id":"3","qty":3}]);
    let onion = new FoodIngredient("10","Cebola","assets/img/foodAndIgredients/onion.png",false, undefined);
    let honey = new FoodIngredient("11","Mel","assets/img/foodAndIgredients/honey.png",true, [{"id":"9","qty":3},{"id":"8","qty":6},{"id":"3","qty":3},{"id":"3","qty":2}]);
    let wine = new FoodIngredient("12","Vinho","assets/img/foodAndIgredients/wine.png",false, undefined);
    let salt = new FoodIngredient("13","Sal","assets/img/foodAndIgredients/salt.png",false, undefined);
    let egg = new FoodIngredient("14","Ovos de Pássaro","assets/img/foodAndIgredients/egg.png",true, [{"id":"2","qty":3},{"id":"7","qty":5},{"id":"8","qty":2},{"id":"12","qty":2}]);
    let fryingOil = new FoodIngredient("15","Oleo para Fritura","assets/img/foodAndIgredients/fryingOil.png",false, undefined);  
    let whiteSauce = new FoodIngredient("16","Molho Branco","assets/img/foodAndIgredients/whiteSauce.png",true, [{"id":"5","qty":3}]);       
    let oliveOil = new FoodIngredient("17","Oleo de Oliva","assets/img/foodAndIgredients/oliveOil.png",false, undefined);       
    let rough = new FoodIngredient("18","Massa","assets/img/foodAndIgredients/rough.png",false, [{"id":"13","qty":6},{"id":"12","qty":6},{"id":"8","qty":4}]);
    let plants = new FoodIngredient("19","Plantas","assets/img/foodAndIgredients/rose.png",false, undefined);
    let fruit = new FoodIngredient("20","Frutas","assets/img/foodAndIgredients/apple.png", true, [{"id":"11","qty":5},{"id":"9","qty":4}]);
    let garlic = new FoodIngredient("21","Alho","assets/img/foodAndIgredients/garlic.png",false, undefined);
    let redSauce = new FoodIngredient("22","Molho Vermelho","assets/img/foodAndIgredients/redSauce.png",true, [{"id":"10","qty":2}]);
    let cream = new FoodIngredient("23","Creme","assets/img/foodAndIgredients/cream.png",false, undefined);
    let baseSauce = new FoodIngredient("24", "Molho Veid", "assets/img/foodAndIgredients/baseSauce.png",false, undefined);
    let cheese = new FoodIngredient("25", "Queijo", "assets/img/foodAndIgredients/cheese.png",false, undefined);
    let pepper = new FoodIngredient("26", "Pimenta do Reino", "assets/img/foodAndIgredients/pepper.png",false, undefined);
    let grilledSausage = new FoodIngredient("27","Salsicha Grelhada","assets/img/foodAndIgredients/grilledSausage.png",true, [{"id":"17","qty":1}]);
    let cabbage = new FoodIngredient("28","Legumes","assets/img/foodAndIgredients/cabbage.png",false, undefined);
    let lizardMeat = new FoodIngredient("29","Carne de Réptil","assets/img/foodAndIgredients/lizardMeat.png",true,[{"id":"18","qty":6}]);
    let cinnamon = new FoodIngredient("30","Canela","assets/img/foodAndIgredients/cinnamon.png",false, undefined);
    let liquorEssence = new FoodIngredient("31","Essência de Liquor","assets/img/foodAndIgredients/liquorEssence.png",true,[{"id":"19","qty":2}]);

    let ingredientsList = [oatmeal,meat,birdMeat,lizardMeat,cereal,liquorEssence,fruit,milk,rough,honey,whiteSauce,redSauce,egg,driedFish,grilledSausage];
    sessionStorage.setItem('ingredientsList', JSON.stringify(ingredientsList));    
    
    /* Must be added following ID order */
    let ingredients = [cereal,mineralWater,sugar,oatmeal,meat,driedFish,leavingAgent,birdMeat,flour,milk,onion,honey,wine,salt,egg,
      fryingOil,whiteSauce,oliveOil,rough,plants,fruit,garlic,redSauce,cream,baseSauce,cheese,pepper,grilledSausage,cabbage,lizardMeat,
      cinnamon, liquorEssence];
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
      new ImperialItem("10","Baú de Croquete de Carne","assets/img/imperialItems/meatCroquetteCookingBox.png","Artesão",local,"16",40, true, 410000),
      new ImperialItem("11","Baú de Queijo Gratinado","assets/img/imperialItems/cheeseGratinCookingBox.png","Artesão",local,"17",40, true, 410000),
      new ImperialItem("12","Báu de Bolinho do Deserto","assets/img/imperialItems/desertDumplingCookingBox.png","Artesão",local,"18",40,true,277500),
      new ImperialItem("13","Báu de Vinho de Mel","assets/img/imperialItems/honeyWineCookingBox.png","Artesão",local,"19",50,true,190000),
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
