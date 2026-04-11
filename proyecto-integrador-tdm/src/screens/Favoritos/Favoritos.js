import React, { Component } from "react";
import Pelicula_individual from "../../components/Pelicula_individual/Pelicula_individual";

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {  
            infoFav: [],
            loading: true
        };
    }
   
    componentDidMount(){
        let peliculasGuardadas = localStorage.getItem('favPeliculas');
        let storageRecuperado = JSON.parse(peliculasGuardadas);
   
        if (storageRecuperado == null) {
            storageRecuperado = [];
        }

        if (storageRecuperado.length === 0) {
            this.setState({
                loading: false
            });
            return;
        }
   
        let arrayPeliculas = [];
   
        storageRecuperado.map(pelicula => {
            fetch(`https://api.themoviedb.org/3/movie/${pelicula}`, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer TU_TOKEN"
                }
            })
            .then((response) => response.json())
            .then((data) => {
                arrayPeliculas.push(data);

                this.setState({
                    infoFav: arrayPeliculas
                });

                if (arrayPeliculas.length === storageRecuperado.length) {
                    this.setState({
                        loading: false
                    });
                }
            })
            .catch((error) => console.log(error));
        });
    }

    render(){
        if (this.state.loading) {
            return(
                <div>
                    <h1>Mis Favoritos</h1>
                    <h2>Cargando...</h2>
                </div>
            );
        }

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
        );
    }
}

export default Favoritos;
