//Dummy
export interface RecipesType {
    name: string;
    ingredients: Ingredient[];
    steps: string[];
    timers: number[];
    imageURL: string;
    originalURL?: string;
}

export interface Ingredient {
    quantity: string;
    name: string;
    type: string;
}

//Dummy2

export interface Recipe2 {
    name: string;
    id: string;
    description: string;
    tag: string[];
    ingredient?: Ingredient2[];
    ingredientGroup?: IngredientGroup2[];
    step: Step2[];
    image?: string;
    notes?: string;
    forked?: string;
}

export interface Step2 {
    description: string;
}

export interface Ingredient2 {
    amount?: string;
    unit?: string;
    name?: string;
    preparation?: string;
}

export interface IngredientGroup2 {
    name?: string;
    ingredient: Ingredient22[];
}

export interface Ingredient22 {
    name?: string;
    unit?: string;
    amount?: string;
    preparation?: string;
}
