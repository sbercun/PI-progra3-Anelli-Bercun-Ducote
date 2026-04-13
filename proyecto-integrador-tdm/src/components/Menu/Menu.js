import React from 'react';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const sesion = cookies.get("user-auth-cookie");

function Menu() {

    return (
        <ul className="menu">
            <li className="menu-item">
                <Link className="menu-link" to="/">Home</Link>
            </li>
            
            {/* si no hay sesion mostrar LogIn y Crear cuenta  */}
            {!sesion && 
                <li className="menu-item">
                    <Link className="menu-link" to="/logIn">LogIn</Link>
                </li>
            }
            {!sesion && 
                <li className="menu-item">
                    <Link className="menu-link" to="/signIn">SignIn</Link>
                </li>
            }

            {/* Si sí hay sesion, que muestre vaforitos */}
            {sesion && 
                <li className="menu-item">
                    <Link className="menu-link" to="/favoritos">Favoritos</Link>
                </li>
            }
        </ul>
    );
}

export default Menu;