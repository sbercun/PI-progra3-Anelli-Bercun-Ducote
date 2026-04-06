import React, { Component } from "react";
import Pelicula_individual from "../../components/Pelicula_individual/Pelicula_individual";
import { Link } from "react-router-dom";


class Peliculas_populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array_pelicula: [],
      peliculasFiltradas:[],
      valorUsuario: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular" ,
        {method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
        }})
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          array_pelicula: data.results,
          peliculasFiltradas: data.results
        });
      })
      .catch((error) => console.log(error));
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
    return (
      <section>
        <form>
            {(event) => this.filtrarPeliculas(event)}
          <input
            type="text"
            placeholder="Buscar película"
            onChange={(event) => this.controlarUsuario(event)}
            value={this.state.valorInput}
          />
          <button type="submit">Buscar</button>
        </form>

        <div className="container_peliculas">
          {this.state.array_pelicula.map((pelicula) => (<Pelicula_individual id={pelicula.id} imagen={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} nombre={pelicula.title} descripcion={pelicula.overview}/>))}
        </div>
    
      </section>
    );
  }
}

export default Peliculas_populares;