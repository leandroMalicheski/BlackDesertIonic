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
  	];
    sessionStorage.setItem('ingredients', JSON.stringify(ingredients));
    
    let foodList = [
      {"id":"0", "name":"Cerveja", "level":"Iniciante 1", "ingredients":[{"id":"0", "qty":5},{"id":"1", "qty":6},{"id":"2", "qty": 1},{"id":"6", "qty": 2}], "icon":"assets/img/foodAndIgredients/beer.png","plusCrafted":[{"name":"Cerveja Gelada"}]},
      {"id":"1", "name":"Ração Orgânica", "level":"Aprendiz 6", "ingredients":[{"id":"3", "qty":2},{"id":"4", "qty":5},{"id":"7", "qty": 4},{"id":"5", "qty": 4}], "icon":"assets/img/foodAndIgredients/organicFeedA.png"},
      {"id":"2", "name":"Ovo Cozido", "level":"Iniciante 6", "ingredients":[{"id":"14", "qty":3},{"id":"1", "qty":6},{"id":"12", "qty":1},{"id":"13", "qty":1}], "icon":"assets/img/foodAndIgredients/boiledEgg.png", "plusCrafted":[{"name":"Ovo Cozido Atraente"}]},
      {"id":"3", "name":"Aveia", "level":"Aprendiz 1","ingredients":[{"id":"8","qty":9},{"id":"9","qty":3},{"id":"10","qty":3},{"id":"11","qty":2}],"icon":"assets/img/foodAndIgredients/oatmealA.png", "plusCrafted":[{"name":"Aveia Refinada"}]},
      {"id":"4", "name":"Peixe Frito", "level":"Aprendiz 1","ingredients":[{"id":"8","qty":3},{"id":"5","qty":2},{"id":"15","qty":2}],"icon":"assets/img/foodAndIgredients/friedFish.png", "plusCrafted":[{"name":"Peixe Frito Crocante"}]},
      {"id":"5", "name":"Salgado de File de Peixe", "level":"Aprendiz 1","ingredients":[{"id":"5","qty":2},{"id":"16","qty":3},{"id":"8","qty":7},{"id":"13","qty":2}],"icon":"assets/img/foodAndIgredients/fishFilletChips.png", "plusCrafted":[{"name":"Salgado de File de Peixe Delicioso"}]},
      {"id":"6", "name":"Ensopado de Carne", "level":"Iniciante 1","ingredients":[{"id":"4","qty":5},{"id":"8","qty":2},{"id":"12","qty":2},{"id":"1","qty":3}],"icon":"assets/img/foodAndIgredients/meatStew.png", "plusCrafted":[{"name":"Ensopado de Carne Forte"}]},
      {"id":"7", "name":"Omelete", "level":"Aprendiz 1","ingredients":[{"id":"0","qty":5},{"id":"17","qty":2},{"id":"14","qty":5},{"id":"13","qty":2}],"icon":"assets/img/foodAndIgredients/omelete.png", "plusCrafted":[{"name":"Omelete Macio"}]},
      {"id":"8", "name":"Biscoito de Mel", "level":"Aprendiz 6","ingredients":[{"id":"11","qty":6},{"id":"14","qty":2},{"id":"9","qty":4},{"id":"18","qty":2}],"icon":"assets/img/foodAndIgredients/honeycombCookie.png", "plusCrafted":[{"name":"Biscoito de Mel Crocante"}]},
    ];
    sessionStorage.setItem('foodList', JSON.stringify(foodList));

  	let foods = [
  	  {"id":"0", "name":"Cerveja", "icon":"assets/img/foodAndIgredients/beer.png", "hasFoodPage":true},
      {"id":"1", "name":"Ração Orgânica", "icon":"assets/img/foodAndIgredients/organicFeedA.png", "hasFoodPage":true},
      {"id":"2", "name":"Ovo Cozido", "icon":"assets/img/foodAndIgredients/boiledEgg.png", "hasFoodPage":true},
      {"id":"3", "name":"Aveia", "icon":"assets/img/foodAndIgredients/oatmealA.png", "hasFoodPage":true},
      {"id":"4", "name":"Peixe Frito", "icon":"assets/img/foodAndIgredients/friedFish.png", "hasFoodPage":true},
      {"id":"5", "name":"Salgado de File de Peixe", "icon":"assets/img/foodAndIgredients/fishFilletChips.png", "hasFoodPage":true},
      {"id":"6", "name":"Ensopado de Carne", "icon":"assets/img/foodAndIgredients/meatStew.png", "hasFoodPage":true},
      {"id":"7", "name":"Omelete", "icon":"assets/img/foodAndIgredients/omelete.png", "hasFoodPage":true},
      {"id":"8", "name":"Biscoito de Mel","icon":"assets/img/foodAndIgredients/honeycombCookie.png", "hasFoodPage":true},
    ];
    sessionStorage.setItem('foods', JSON.stringify(foods));  

    let imperialCookingList = [
  		{"id":"0","name":"Caixa de Peixe Frito", "icon":"assets/img/imperialItems/friedFishCookingBox.png","level":"Aprendiz 1","local":"Heidel, Altinova e Calpheon","cratfItemId":"4","qtyToCraft":20, "hasFoodPage":true, "price":150000},
      {"id":"1","name":"Caixa Ovo Cozido", "icon":"assets/img/imperialItems/boiledEggCookingBox.png","level":"Aprendiz 1","local":"Heidel, Altinova e Calpheon","cratfItemId":"2","qtyToCraft":20, "hasFoodPage":true, "price":138750},
      {"id":"2","name":"Caixa de Salgado de File de Peixe", "icon":"assets/img/imperialItems/fishFilletCookingBox.png","level":"Proficiente 1","local":"Heidel, Altinova e Calpheon","cratfItemId":"5","qtyToCraft":20, "hasFoodPage":true, "price":160000},
      {"id":"3","name":"Caixa de Ensopado de Carne", "icon":"assets/img/imperialItems/meatStewCookingBox.png","level":"Aprendiz 1","local":"Heidel, Altinova e Calpheon","cratfItemId":"6","qtyToCraft":20, "hasFoodPage":true, "price":195000},
      {"id":"4","name":"Caixa de Omelete", "icon":"assets/img/imperialItems/omeleteCookingBox.png","level":"Proficiente 1","local":"Heidel, Altinova e Calpheon","cratfItemId":"7","qtyToCraft":40, "hasFoodPage":true, "price":205000},
  	];
	sessionStorage.setItem('imperialCookingList', JSON.stringify(imperialCookingList));    	
  }

}
