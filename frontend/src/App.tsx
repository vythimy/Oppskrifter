import React, { useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import recipes from "./dummy";
import "./Recipe.css";
import recipes2 from "./dummy2";
import { Ingredient, Recipe2, RecipesType } from "./utils/types";

const App = () => {
    //const [recipeState, setRecipeState] = useState<RecipesType[]>(recipes);
    const [recipeState2, setRecipeState] = useState<Recipe2[]>(recipes2);

    return (
        <div className="lineUp">
            {recipeState2.map((f, index) => {
                return <Recipe ingredientProp={f} key={index} />;
            })}
        </div>
    );
};

export default App;
