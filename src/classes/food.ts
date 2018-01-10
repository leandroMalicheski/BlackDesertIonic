interface PlusCrafted{name: string};
interface PlusCraftedList extends Array<PlusCrafted>{};
interface IngredientNeeded{id: string;	qty: number;};
interface IngredientsNeededList extends Array<IngredientNeeded>{};

export class Food {
	
	constructor(public id: string, public name: string, public level: string, public icon: string, public plusCrafted: PlusCraftedList, public ingredients: IngredientsNeededList, public hasFoodPage: boolean){}
}