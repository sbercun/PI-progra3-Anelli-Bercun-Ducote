import React, { Component } from "react";

class Detalle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}` ,
            {method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
            }})
        .then((response) => response.json())
        .then((data) => {
            this.setState({
            pelicula: data
            });
        })
        .catch((error) => console.log(error));
  }

  render() {
    const pelicula = this.state.pelicula
    if (pelicula === null) {
      return <p>Cargando</p>
    }

    return (
        <section>
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="" />
            <h1>{pelicula.title}</h1>
            <p>Rating: {pelicula.vote_average}</p>
            <p>Fecha: {pelicula.release_date}</p>
            <p>Duración: {pelicula.runtime} minutos</p>
            <p>{pelicula.overview}</p>
            <p> Géneros: {pelicula.genres.map((genero) => genero.name).join(", ")} </p>
            <button>Agregar a favoritos</button>
        </section>
    );
  }
} 

export default Detalle