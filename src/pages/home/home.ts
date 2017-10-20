import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  	let ingredientsList = [
  	  {"id":"0", "name":"Cereais", "icon":"assets/img/foodAndIgredients/corn.png", "foods":[{"id":"0","qty":5},{"id":"7","qty":5}]},
      {"id":"7", "name":"Carne de Frango", "icon":"assets/img/foodAndIgredients/birdMeat.png", "foods":[{"id":"1","qty":4}]},
      {"id":"14", "name":"Ovo", "icon":"assets/img/foodAndIgredients/egg.png", "foods":[{"id":"2","qty":3},{"id":"7","qty":5},{"id":"8","qty":2}]},
      {"id":"5", "name":"Peixe Seco", "icon":"assets/img/foodAndIgredients/driedFish.png","foods":[{"id":"1","qty":2},{"id":"4","qty":2},{"id":"5","qty":2}]},
  	]
    sessionStorage.setItem('ingredientsList', JSON.stringify(ingredientsList));
    
  	let ingredients = [
  	  {"id":"0", "name":"Milho", "icon":"assets/img/foodAndIgredients/corn.png","hasIngredientPage":true},
  	  {"id":"1", "name":"Água Mineral", "icon":"assets/img/foodAndIgredients/mineralWater.png","hasIngredientPage":false},
  	  {"id":"2", "name":"Açúcar", "icon":"assets/img/foodAndIgredients/sugar.png","hasIngredientPage":false},
  	  {"id":"3", "name":"Aveia", "icon":"assets/img/foodAndIgredients/oatmealA.png","hasFoodPage":true},
      {"id":"4", "name":"Carne", "icon":"assets/img/foodAndIgredients/meat.png","hasIngredientPage":false},
      {"id":"5", "name":"Peixe Seco", "icon":"assets/img/foodAndIgredients/driedFish.png","hasIngredientPage":true},
      {"id":"6", "name":"Fermento", "icon":"assets/img/foodAndIgredients/leavingAgent.png","hasIngredientPage":false},
      {"id":"7", "name":"Carne de Frango", "icon":"assets/img/foodAndIgredients/birdMeat.png","hasIngredientPage":true},
      {"id":"8", "name":"Farinha","icon":"assets/img/foodAndIgredients/flour.png","hasIngredientPage":false},
      {"id":"9", "name":"Leite","icon":"assets/img/foodAndIgredients/milk.png","hasIngredientPage":false},
      {"id":"10","name":"Cebola","icon":"assets/img/foodAndIgredients/onion.png","hasIngredientPage":false},
      {"id":"11","name":"Mel","icon":"assets/img/foodAndIgredients/honey.png","hasIngredientPage":false},
      {"id":"12","name":"Vinho","icon":"assets/img/foodAndIgredients/wine.png","hasIngredientPage":false},
      {"id":"13","name":"Sal","icon":"assets/img/foodAndIgredients/salt.png","hasIngredientPage":false},
      {"id":"14","name":"Ovo","icon":"assets/img/foodAndIgredients/egg.png","hasIngredientPage":true},
      {"id":"15","name":"Oleo de Fritura","icon":"assets/img/foodAndIgredients/fryingOil.png","hasIngredientPage":false},     
      {"id":"16","name":"Molho Branco","icon":"assets/img/foodAndIgredients/whiteSauce.png","hasIngredientPage":false},       
      {"id":"17","name":"Oleo de Oliva","icon":"assets/img/foodAndIgredients/oliveOil.png","hasIngredientPage":false},       
      {"id":"18","name":"Massa","icon":"assets/img/foodAndIgredients/rough.png","hasIngredientPage":false},
      {"id":"19","name":"Plantas","icon":"assets/img/foodAndIgredients/rose.png","hasIngredientPage":false},
      {"id":"20","name":"Frutas","icon":"assets/img/foodAndIgredients/apple.png","hasIngredientPage":false},
      {"id":"21","name":"Alho","icon":"assets/img/foodAndIgredients/garlic.png","hasIngredientPage":false},
      {"id":"22","name":"Molho vermelho","icon":"assets/img/foodAndIgredients/redSauce.png","hasIngredientPage":false},
      {"id":"23","name":"Creme","icon":"assets/img/foodAndIgredients/cream.png","hasIngredientPage":false},
  	];
    sessionStorage.setItem('ingredients', JSON.stringify(ingredients));

    let foodList = [
      {"id":"0", "name":"Cerveja", "level":"Iniciante 1", "ingredients":[{"id":"0", "qty":5},{"id":"1", "qty":6},{"id":"2", "qty": 1},{"id":"6", "qty": 2}], "icon":"assets/img/foodAndIgredients/beer.png","plusCrafted":[{"name":"Cerveja Gelada"}]},
      {"id":"1", "name":"Ração Orgânica", "level":"Aprendiz 6", "ingredients":[{"id":"3", "qty":2},{"id":"4", "qty":5},{"id":"7", "qty": 4},{"id":"5", "qty": 4}], "icon":"assets/img/foodAndIgredients/organicFeedA.png"},
      {"id":"2", "name":"Ovo Cozido", "level":"Iniciante 6", "ingredients":[{"id":"14", "qty":3},{"id":"1", "qty":6},{"id":"12", "qty":1},{"id":"13", "qty":1}], "icon":"assets/img/foodAndIgredients/boiledEgg.png", "plusCrafted":[{"name":"Ovo Cozido Atraente"}]},
      {"id":"3", "name":"Aveia", "level":"Aprendiz 1","ingredients":[{"id":"8","qty":9},{"id":"9","qty":3},{"id":"10","qty":3},{"id":"11","qty":2}],"icon":"assets/img/foodAndIgredients/oatmealA.png", "plusCrafted":[{"name":"Aveia Refinada"}]},
      {"id":"4", "name":"Peixe Frito", "level":"Aprendiz 1","ingredients":[{"id":"8","qty":3},{"id":"5","qty":2},{"id":"15","qty":2}],"icon":"assets/img/foodAndIgredients/friedFish.png", "plusCrafted":[{"name":"Peixe Frito Crocante"}]},
      {"id":"5", "name":"Salgado de File de Peixe", "level":"Aprendiz 1","ingredients":[{"id":"5","qty":2},{"id":"16","qty":3},{"id":"8","qty":7},{"id":"13","qty":2}],"icon":"assets/img/foodAndIgredients/fishFilletChips.png", "plusCrafted":[{"name":"Salgado de File de Peixe Delicioso"}]},
      {"id":"6", "name":"Sopa de Carne", "level":"Iniciante 1","ingredients":[{"id":"4","qty":5},{"id":"8","qty":2},{"id":"12","qty":2},{"id":"1","qty":3}],"icon":"assets/img/foodAndIgredients/meatStew.png", "plusCrafted":[{"name":"Ensopado de Carne Forte"}]},
      {"id":"7", "name":"Omelete", "level":"Aprendiz 1","ingredients":[{"id":"0","qty":5},{"id":"17","qty":2},{"id":"14","qty":5},{"id":"13","qty":2}],"icon":"assets/img/foodAndIgredients/omelete.png", "plusCrafted":[{"name":"Omelete Macio"}]},
      {"id":"8", "name":"Biscoito de Mel", "level":"Aprendiz 6","ingredients":[{"id":"11","qty":6},{"id":"14","qty":2},{"id":"9","qty":4},{"id":"18","qty":2}],"icon":"assets/img/foodAndIgredients/honeycombCookie.png", "plusCrafted":[{"name":"Biscoito de Mel Crocante"}]},
      {"id":"9", "name":"Chá com Aroma Fino", "level":"Aprendiz 1", "ingredients":[{"id":"19","qty":4},{"id":"20","qty":4},{"id":"1","qty":7},{"id":"11","qty":3}],"icon":"assets/img/foodAndIgredients/teaWithFineScent.png", "plusCrafted":[{"name":"Chá com Aroma Fino Forte"}]},
      {"id":"10", "name":"Bife", "level":"Aprendiz 1", "ingredients":[{"id":"4","qty":8},{"id":"13","qty":2},{"id":"21","qty":2},{"id":"22","qty":2}],"icon":"assets/img/foodAndIgredients/steak.png", "plusCrafted":[{"name":"Bife Suculento"}]},
      {"id":"11", "name":"Pudim de Frutas", "level":"Iniciante 6", "ingredients":[{"id":"20","qty":5},{"id":"23","qty":1},{"id":"9","qty":3},{"id":"2","qty":2}],"icon":"assets/img/foodAndIgredients/fruitPudding.png", "plusCrafted":[{"name":"Pudim de Frutas Especial"}]},
    ];
    sessionStorage.setItem('foodList', JSON.stringify(foodList));

  	let foods = [
  	  {"id":"0", "name":"Cerveja", "icon":"assets/img/foodAndIgredients/beer.png", "hasFoodPage":true},
      {"id":"1", "name":"Ração Orgânica", "icon":"assets/img/foodAndIgredients/organicFeedA.png", "hasFoodPage":true},
      {"id":"2", "name":"Ovo Cozido", "icon":"assets/img/foodAndIgredients/boiledEgg.png", "hasFoodPage":true},
      {"id":"3", "name":"Aveia", "icon":"assets/img/foodAndIgredients/oatmealA.png", "hasFoodPage":true},
      {"id":"4", "name":"Peixe Frito", "icon":"assets/img/foodAndIgredients/friedFish.png", "hasFoodPage":true},
      {"id":"5", "name":"Salgado de File de Peixe", "icon":"assets/img/foodAndIgredients/fishFilletChips.png", "hasFoodPage":true},
      {"id":"6", "name":"Sopa de Carne", "icon":"assets/img/foodAndIgredients/meatStew.png", "hasFoodPage":true},
      {"id":"7", "name":"Omelete", "icon":"assets/img/foodAndIgredients/omelete.png", "hasFoodPage":true},
      {"id":"8", "name":"Biscoito de Mel","icon":"assets/img/foodAndIgredients/honeycombCookie.png", "hasFoodPage":true},
      {"id":"9", "name":"Chá com Aroma Fino","icon":"assets/img/foodAndIgredients/teaWithFineScent.png", "hasFoodPage":true},
      {"id":"10", "name":"Bife","icon":"assets/img/foodAndIgredients/steak.png", "hasFoodPage":true},
      {"id":"11", "name":"Pudim de Frutas","icon":"assets/img/foodAndIgredients/fruitPudding.png", "hasFoodPage":true},
    ];
    sessionStorage.setItem('foods', JSON.stringify(foods));  

    let imperialCookingList = [
  		{"id":"0","name":"Baú de Peixe Frito", "icon":"assets/img/imperialItems/friedFishCookingBox.png","level":"Aprendiz","local":"Heidel, Altinova e Calpheon","cratfItemId":"4","qtyToCraft":20, "hasFoodPage":true, "price":150000},
      {"id":"1","name":"Baú de Ovo Cozido de Pássaro", "icon":"assets/img/imperialItems/boiledEggCookingBox.png","level":"Aprendiz","local":"Heidel, Altinova e Calpheon","cratfItemId":"2","qtyToCraft":20, "hasFoodPage":true, "price":138750},      
      {"id":"2","name":"Baú de Sopa de Carne", "icon":"assets/img/imperialItems/meatStewCookingBox.png","level":"Aprendiz","local":"Heidel, Altinova e Calpheon","cratfItemId":"6","qtyToCraft":20, "hasFoodPage":true, "price":195000},
      {"id":"6","name":"Baú de File de Peixe", "icon":"assets/img/imperialItems/fishFilletCookingBox.png","level":"Proficiente","local":"Heidel, Altinova e Calpheon","cratfItemId":"5","qtyToCraft":20, "hasFoodPage":true, "price":160000},
      {"id":"6","name":"Baú de Pudim de Fruta", "icon":"assets/img/imperialItems/fruitPuddingCookingBox.png","level":"Proficiente","local":"Heidel, Altinova e Calpheon","cratfItemId":"11","qtyToCraft":20, "hasFoodPage":true, "price":212500},
      {"id":"3","name":"Baú de Chá com Aroma Fino", "icon":"assets/img/imperialItems/goodSmellingCookingBox.png","level":"Profissional","local":"Heidel, Altinova e Calpheon","cratfItemId":"9","qtyToCraft":30, "hasFoodPage":true, "price":217500},
      {"id":"4","name":"Baú de Omelete", "icon":"assets/img/imperialItems/omeleteCookingBox.png","level":"Profissional","local":"Heidel, Altinova e Calpheon","cratfItemId":"7","qtyToCraft":40, "hasFoodPage":true, "price":205000},
      {"id":"5","name":"Baú de Carne", "icon":"assets/img/imperialItems/steakCookingBox.png","level":"Profissional","local":"Heidel, Altinova e Calpheon","cratfItemId":"10","qtyToCraft":20, "hasFoodPage":true, "price":242500},      
     
      
      

  	];
	sessionStorage.setItem('imperialCookingList', JSON.stringify(imperialCookingList));    	
  }

}
