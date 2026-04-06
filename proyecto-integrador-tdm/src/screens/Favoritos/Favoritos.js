import React, { Component } from "react";
import Pelicula_individual from "../../components/Pelicula_individual/Pelicula_individual";
import Peliculas_cartel from "../../components/Peliculas_cartel/Peliculas_cartel"; 

class Favoritos extends Component{
    constructor(props){
        super(props);
        // Defino el estado inicial de los componentes para peliculas y series
        this.state = {  
            infoFav: {}, //con llaves xq la api me devuelve un objeto liyetal
        };
    }
    
    componentDidMount(){
        let peliculasGuardadas = localStorage.getItem('favPeliculas');
        let storageRecuperado = JSON.parse(peliculasGuardadas);
        
        storageRecuperado.map( pelicula => {fetch(`https://api.themoviedb.org/3/movie/${pelicula}`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                infoFav: data
            });
            console.log("heloooo");
        })
        .catch((error) => console.log(error))}
        )
    }

    render(){
        return(
            <div>
                <h1>Mis Favoritos</h1>

                <section>
                    <Pelicula_individual />
                </section>
            </div>
        )
    }

}


 export default Favoritos;