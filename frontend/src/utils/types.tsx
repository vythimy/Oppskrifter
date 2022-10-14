export interface RecipeType {
    name: string;
    imgURL?: string;
    ingredients: IngredientsData[];
    steps: string[];
}

export interface IngredientsData {
    _id: string;
    ingredient: string;
}
