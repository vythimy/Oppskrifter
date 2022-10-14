import React, { useEffect, useState } from "react";
import "./Recipes.scss";
import Recipe from "../Recipe/Recipe";
import { RecipeType } from "../../utils/types";

const Recipes = () => {
    const [recipeState2, setRecipeState] = useState<RecipeType[]>([]);

    useEffect(() => {
        fetch("https://oppskrifter-backend.herokuapp.com/recipes", {
            method: "GET",
        })
            .then((res) => res.json())
            .then(setRecipeState);
    }, []);

    return (
        <div className="Recipes">
            {recipeState2.map((recipe, index) => {
                return <Recipe recipeData={recipe} key={index} />;
            })}
        </div>
    );
};

export default Recipes;
