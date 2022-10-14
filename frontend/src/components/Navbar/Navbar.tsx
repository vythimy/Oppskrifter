import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import chefhat from "../../media/chefhat.png";

const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={chefhat}></img>
            <div>
                <Link to="/">Oppskrifter</Link>
            </div>
            <div>
                <Link to="/register">Opprett en oppskrift</Link>
            </div>
        </div>
    );
};
export default Navbar;
