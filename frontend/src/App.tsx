import { Routes, Route, BrowserRouter } from "react-router-dom";
import Recipes from "../src/components/Recipes/Recipes";
import "./App.css";
import RegisterRecipe from "./components/RegisterRecipe/RegisterRecipe";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Recipes />} />
                <Route path="/register" element={<RegisterRecipe />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
