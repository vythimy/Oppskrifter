import { useEffect, useState } from "react";
import { IngredientsData } from "../../../utils/types";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./RegisterIngredient.scss";

const RegisterIngredient = () => {
    const [inputIngredient, setInputIngredient] = useState<string>("");

    // TODO: Det er god praksis å alltid plassere useState i toppen, også useEffect rett under
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputIngredient(e.target.value);
    };

    const [ingredients, setIngredients] = useState<IngredientsData[]>([]);

    // Kunne denne blitt kalt i onChange-funksjonen istedenfor at onchange endrer en state som gjør at denne oppdaterer seg?
    // Jeg ville iallfall testet det ut
    useEffect(() => {
        fetch("https://oppskrifter-backend.herokuapp.com/ingredients", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) =>
                setIngredients(
                    res.map((a: IngredientsData) => ({
                        name: a.ingredient,
                        _id: a._id,
                    }))
                )
            );
    }, [inputIngredient]);

    console.log(ingredients);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        fetch("https://oppskrifter-backend.herokuapp.com/ingredients/add", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
            },
            body: JSON.stringify({ ingredient: inputIngredient }),
        })
            .then((res) => res.json())
            .then((result) => {
                setInputIngredient("");
            });
    };

    const beforeValue = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setInputIngredient("");
    };

    const formatResult = (item: IngredientsData) => {
        return (
            <>
                <span style={{ display: "block", textAlign: "left" }}>
                    id: {item._id}
                </span>
                <span style={{ display: "block", textAlign: "left" }}>
                    name: {item.ingredient}
                </span>
            </>
        );
    };

    return (
        <div className="RegisterRecipe">
            <ReactSearchAutocomplete
                items={ingredients}
                resultStringKeyName="ingredient"
                showIcon={false}
                autoFocus
                formatResult={formatResult}
                styling={{
                    height: "34px",
                    border: "1px solid black",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    boxShadow: "none",
                    hoverBackgroundColor: "lightblue",
                    color: "black",
                    iconColor: "black",
                    lineColor: "black",
                    placeholderColor: "black",
                    clearIconMargin: "3px 8px 0 0",
                }}
            />
            <form onSubmit={handleSubmit}>
                <label>Ingredienser:</label>
                <div className="inputFields">
                    <input
                        id="myinputfield"
                        type="text"
                        value={inputIngredient}
                        // TODO: Her tror jeg du kan droppe pilfunksjonen og bare putte inn funksjonen, så får den automatisk e som parameter
                        onChange={(e) => handleChange(e)}
                        placeholder="Skriv inn ingrediens"
                    />
                    <input type="submit" value="+" />
                </div>
            </form>
        </div>
    );
};

export default RegisterIngredient;
