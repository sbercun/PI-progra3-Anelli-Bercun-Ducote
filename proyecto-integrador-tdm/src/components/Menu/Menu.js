import React from 'react';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const sesion = cookies.get("user-auth-cookie");

function Menu() {
    function logout() {
        cookies.remove("user-auth-cookie");
        window.location.href = "/"
    }

    let usuario = cookies.get("user-auth-cookie");

    return (
        <ul className="menu">
            <li className="menu-item">
                <Link className="menu-link" to="/">Home</Link>
            </li>
            
            {/* si no hay sesion mostrar LogIn y Crear cuenta  */}
            {!sesion ? (
                <li className="menu-item">
                    <Link className="menu-link" to="/logIn">LogIn</Link>
                </li>
            ) : null}

            {!sesion ? (
                <li className="menu-item">
                    <Link className="menu-link" to="/signIn">SignIn</Link>
                </li>
            ) : null}

            {/* Si sí hay sesion, que muestre vaforitos */}
            {sesion ? (
                <li className="menu-item">
                    <Link className="menu-link" to="/favoritos">Favoritos</Link>
                </li>
            ) : null}
            
            {sesion ? (
                <li className="menu-item">
                    <button className="menu-link noLink" onClick={logout}>
                        Logout
                    </button>
                </li>
            ) : null}
        </ul>
    );
}

export default Menu;