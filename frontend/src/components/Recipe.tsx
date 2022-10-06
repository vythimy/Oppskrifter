import { FC } from "react";
import { RecipesType, Ingredient, Recipe2 } from "../utils/types";

const Recipe: FC<{ ingredientProp: Recipe2 }> = ({ ingredientProp }) => {
    return (
        <div>
            <p>{ingredientProp.name}</p>
            <img
                src={ingredientProp.image}
                alt={ingredientProp.name}
                style={{ width: "30%", flex: "0 0 215px", margin: "1em 20px" }}
            />
        </div>
    );
};

export default Recipe;
