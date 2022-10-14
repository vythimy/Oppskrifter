import { FC } from "react";
import "./Recipe.scss";
import { RecipeType } from "../../utils/types";

const Recipe: FC<{ recipeData: RecipeType }> = ({ recipeData }) => {
    return (
        <div className="Recipe">
            <p>{recipeData.name}</p>
            <img src={recipeData.imgURL} alt={recipeData.name} />
        </div>
    );
};

export default Recipe;
