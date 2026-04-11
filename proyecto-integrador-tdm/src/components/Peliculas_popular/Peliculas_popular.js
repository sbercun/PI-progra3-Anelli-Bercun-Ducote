import React, { Component } from "react";
import Pelicula_individual from "../Pelicula_individual/Pelicula_individual";
import { Link } from "react-router-dom";

class Peliculas_popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array_pelicula: []
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
          array_pelicula: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section className="pelicula-popular">
        <div className="container_peliculas">
          {this.state.array_pelicula.slice(0,6).map((pelicula) => (<Pelicula_individual id={pelicula.id} imagen={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} nombre={pelicula.title} descripcion={pelicula.overview}/>))}
        </div>
        <Link to="/peliculas_populares">Ver todas</Link>
      </section>
    );
  }
}

export default Peliculas_popular;