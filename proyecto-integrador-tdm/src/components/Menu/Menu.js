import React from 'react';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <ul className="menu">
            <li className="menu-item">
                <Link className="menu-link" to="/">Home</Link>
            </li>

            <li className="menu-item">
                <Link className="menu-link" to="/favoritos">Favoritos</Link>
            </li>

            <li className="menu-item">
                <Link className="menu-link" to="/logIn">LogIn</Link>
            </li>

            <li className="menu-item">
                <Link className="menu-link" to="/signIn">SignIn</Link>
            </li>
        </ul>
    );
}

export default Menu;