import React, { Component } from "react";
import Pelicula_individual from "../Pelicula_individual/Pelicula_individual";
import { Link } from "react-router-dom";

class Peliculas_cartel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array_pelicula: [],
      esFav: false
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing" ,
        {method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
        }})
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          array_pelicula: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  agregarFav(id){
    let peliculasGuardadas = localStorage.getItem('favPeliculas');
    let storageRecuperado = JSON.parse(peliculasGuardadas)
    
    //casos que devuelva NULL
    if (storageRecuperado == null) {
      let primerValor = [id];
      let primerValorString = JSON.stringify(primerValor)
    } else{ //casos que devuelva un array con datos
      storageRecuperado.push( id )
	    let storageString = JSON.stringify( storageRecuperado )
	    localStorage.setItem( 'favPeliculas', storageString )
    }
    this.setState( {esFav: true} )
  }

  sacarFav(id){
    let peliculasGuardadas = localStorage.getItem('favPeliculas');
    let storageRecuperado = JSON.parse(peliculasGuardadas)
    
    //filtro quedandome con todo menos el id que quiero sacar de favoritos
    let storageFiltrado = storageRecuperado.filter( pelicula => pelicula !== id )

    //Convierto el resultado a string para guardarlo en el localStorage
    let nuevoArrayString = JSON.stringify(storageFiltrado)
    
    //guardo el nuevo array filtrado en el localStorage
    localStorage.setItem('favPeliculas', nuevoArrayString)

    //cambio el estado a False para que aparezca el boton de agregar a favoritos
    this.setState( {esFav: false} )
  }

  render() {
    return (
      <section>
        <div className="container_peliculas">
            {this.state.array_pelicula.slice(0,6).map((pelicula) => (<Pelicula_individual id={pelicula.id} imagen={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} nombre={pelicula.title} descripcion={pelicula.overview}/>))}
        </div>
         <Link to="/peliculas_cartelera">Ver todas</Link>
      </section>
    );
  }
}

export default Peliculas_cartel;