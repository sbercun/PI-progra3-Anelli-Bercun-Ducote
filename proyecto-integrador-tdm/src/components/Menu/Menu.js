import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function Menu (){
    return(
        <ul className='menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/peliculas">Peliculas</Link></li>
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li> 
            {/* aca va a tener que ir un condicional que depende de la cookie de logIn. para eso hay que cambiar la function por  
            class Menu extends Component(){
                constructor(props){
                super(props)
                this.state = {
                    VerFav: false,
                }
            */}
            <li><Link to="/logIn">LogIn</Link></li>
            <li><Link to="/signIn">SignIn</Link></li>
        </ul>
    )
}

export default Menu;