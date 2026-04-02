import React, { Component } from "react";
import Pelicula_individual from "../../components/Pelicula_individual/Pelicula_individual";
import Peliculas_cartel from "../../components/Peliculas_cartel/Peliculas_cartel"; 

class Favoritos extends Component{
    constructor(props){
        super(props);
        // Defino el estado inicial de los componentes para peliculas y series
        this.state = {
            pelisFav: [],
            seriesFav: []
        };
    }
    
    componentDidMount(){
        // Busco en  el localStorage si ya hay películas y series guardadas como favoritas
        let peliculasGuardadas = localStorage.getItem('pelisFav');
        let seriesGuardadas = localStorage.getItem('seriesFav');

        // Actualizo el estado con las películas y series favoritas guardadas en localStorage
            // Si existen datos, los convierto de string a array con JSON.parse()
            // Si no existen, se deja un array vacío 
        this.setState({
            pelisFav: peliculasGuardadas ? JSON.parse(peliculasGuardadas) : [],
            seriesFav: seriesGuardadas ? JSON.parse(seriesGuardadas) : []


        });
    }

    render(){
        return(
            <div>
                <h1>Mis Favoritos</h1>

                <section>

                {/* tengo que armar un if ternario de que si SI hay peliculas guardadas como favoritas en el localStorage, entonces que se me aparezcan, sino dejar el array vacio */}                    {/* lo que apareceria dentro debo sacarlo de los components de peliculas y series. */}
                    {/* TODO NECESITA COOKIES */}

                </section>
            </div>
        )
    }

}


 export default Favoritos;