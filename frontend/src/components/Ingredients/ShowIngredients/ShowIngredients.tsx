import { useEffect, useState } from "react";
import { IngredientsData } from "../../../utils/types";

const ShowIngredients = () => {
    const [ingredients, setIngredients] = useState<IngredientsData[]>([]);
    useEffect(() => {
        fetch("https://oppskrifter-backend.herokuapp.com/ingredients", {
            method: "GET",
        })
            .then((res) => res.json())
            .then(setIngredients);
    }, []);
};

export default ShowIngredients;
