import React, { Component } from "react";
import Pelicula_individual from "../../components/Item_individual/Item_individual";
import { Link } from "react-router-dom";


class Peliculas_cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array_pelicula: [],
      peliculasFiltradas: [],
      valorUsuario: "",
      loading: true,
      page: 1
    };
  }

  SiguientePagina() {
    
    fetch(`https://api.themoviedb.org/3/discover/tv?page=${this.state.page}`, 
        {method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
        }})
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          array_pelicula: this.state.array_pelicula.concat(data.results),
          peliculasFiltradas: this.state.peliculasFiltradas.concat(data.results),
          page: this.state.page + 1,
          loading: true
      });
      })
      .catch((error) => 
      console.log(error));
      this.setState ({
        loading: false
      });

  }


  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/tv?page=${this.state.page}`, 
        {method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
        }})
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          array_pelicula: data.results,
          peliculasFiltradas: data.results,
          page: this.state.page + 1,
          loading: false
        });
      })
      .catch((error) => 
      console.log(error));
      this.setState ({
        loading: false
      });
    
    
  }

  controlarUsuario(event){
    this.setState({
        valorUsuario: event.target.value
    })
  }
  
  filtrarPeliculas(event){
    event.preventDefault();

    let peliculas = this.state.array_pelicula.filter((pelicula) => pelicula.title.toLowerCase().includes(this.state.valorUsuario.toLowerCase()));
    this.setState ({
        peliculasFiltradas: peliculas
    });
  }
  
  
 render() {

  if (this.state.peliculasFiltradas.length === 0) {
    return (
      <section>
        <h2>Cargando...</h2>
      </section>
    );
  }

  return (
    <section>
      <div className="search-container">
        <form className="search-form" onSubmit={(event) => this.filtrarPeliculas(event)}>
          <input className="search-input"
            type="text"
            placeholder="Buscar película"
            onChange={(event) => this.controlarUsuario(event)}
            value={this.state.valorUsuario}
          />
          <button  className="search-button" type="submit">Buscar</button>
        </form>
      </div>

      <div className="container_peliculas">
        {this.state.peliculasFiltradas.map((pelicula) => (
          <Pelicula_individual
            key={pelicula.id}
            id={pelicula.id}
            imagen={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            nombre={pelicula.title}
            descripcion={pelicula.overview}
          />
        ))}
      </div>
      <button className="boton-ver-todas" onClick={() => this.SiguientePagina()} > Cargar Más </button>
    </section>
  );
}
}

export default Peliculas_cartelera;

