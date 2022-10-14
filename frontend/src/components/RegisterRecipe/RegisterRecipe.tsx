import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterIngredient from "../Ingredients/RegisterIngredient/RegisterIngredient";
import "./RegisterRecipe.scss";

const RegisterRecipe = () => {
    const [inputIngredient, setInputIngredient] = useState<string>("");
    const [inputRecipeName, setInputRecipeName] = useState<string>("");
    const [inputSteps, setInputSteps] = useState<string[]>([]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        //const navigate = useNavigate();

        fetch("https://oppskrifter-backend.herokuapp.com/recipes/add", {
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
        //navigate("/");
    };

    const beforeValue = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        setInputIngredient("");
    };

    return (
        <div className="RegisterRecipe">
            <form onSubmit={handleSubmit}>
                <div className="inputName">
                    <label>Navn på retten:</label>
                    <input
                        type="text"
                        value={inputRecipeName}
                        onChange={(e) => setInputRecipeName(e.target.value)}
                        placeholder="Skriv inn navnet"
                    />
                </div>
                <RegisterIngredient />
                <label>Steg:</label>
                <input
                    type="text"
                    value={inputRecipeName}
                    onChange={(e) =>
                        setInputSteps([...inputSteps, e.target.value])
                    }
                    placeholder="Skriv inn et steg"
                />

                <input type="submit" value="+" />
            </form>
        </div>
    );
};

export default RegisterRecipe;
