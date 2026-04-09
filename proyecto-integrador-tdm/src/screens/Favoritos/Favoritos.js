import React, { Component } from "react";
import Pelicula_individual from "../../components/Pelicula_individual/Pelicula_individual";
import Peliculas_cartel from "../../components/Peliculas_cartel/Peliculas_cartel"; 

class Favoritos extends Component{
    constructor(props){
        super(props);
        // Defino el estado inicial de los componentes para peliculas y series
        this.state = {  
            infoFav: [], //quiero un array de objetos literales
        };
    }
    
    componentDidMount(){
        let peliculasGuardadas = localStorage.getItem('favPeliculas');
        let storageRecuperado = JSON.parse(peliculasGuardadas);
    
        if (storageRecuperado == null) {
            storageRecuperado = [];
        }
    
        let arrayPeliculas = [];
    
        storageRecuperado.map(pelicula => {
            fetch(`https://api.themoviedb.org/3/movie/${pelicula}`,
            {method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
            }}
            )
            .then((response) => response.json())
            .then((data) => {
                arrayPeliculas.push(data);
    
                this.setState({ infoFav: arrayPeliculas }); // ← clave
            })
            .catch((error) => console.log(error))
        });
    }

    render(){
        return(
            <div>
                <h1>Mis Favoritos</h1>
                <section>
                    {this.state.infoFav.map(peli => (
                    <Pelicula_individual
                    key={peli.id}
                    id={peli.id}
                    imagen={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                    nombre={peli.title}
                    descripcion={peli.overview}
                    />
                    ))}
                </section>
            </div>
        )
    }

}


 export default Favoritos;