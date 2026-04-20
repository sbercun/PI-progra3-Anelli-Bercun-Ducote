import React, { Component } from "react";
import Item_individual from "../Item_individual/Item_individual";
import { Link } from "react-router-dom";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array_series: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
        }
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          array_series: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section className="pelicula-popular">
        <div className="container_peliculas">
          {this.state.array_series.slice(0,6).map((serie) => (
            <Item_individual
              key={serie.id}
              id={serie.id}
              imagen={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              nombre={serie.name}
              descripcion={serie.overview}
              rating={serie.vote_average}
              fecha={serie.first_air_date}
              generos={serie.genre_ids}
              tipo="tv"
            />
          ))}
        </div>
        <Link className="boton-ver-todas" to="/series">Ver todas</Link>
      </section>
    );
  }
}

export default Series;