interface FoodGenerated{id: string;	qty: number;}
interface FoodGeneratedList extends Array<FoodGenerated>{};

export class FoodIngredient {
	qtyTotal: number;
	qty: number;
	constructor(public id: string, public name: string, public icon: string, public hasIngredientPage: boolean, public foodGeneratedList: FoodGeneratedList){}
}