interface FoodGenerated{id: string;	qty: number;}
interface FoodGeneratedList extends Array<FoodGenerated>{};

export class Ingredient {
	
	constructor(public id: string, public name: string, public icon: string, public hasIngredientPage: boolean, public foodGeneratedList: FoodGeneratedList){}
}