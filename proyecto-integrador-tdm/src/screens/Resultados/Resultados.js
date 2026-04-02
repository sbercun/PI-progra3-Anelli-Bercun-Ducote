import React, { Component } from "react";
import Pelicula_individual from "../../components/Pelicula_individual/Pelicula_individual";

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {
    const texto = this.props.match.params.texto;

    fetch(`https://api.themoviedb.org/3/search/movie?query=${texto}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          resultados: data.results || []
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <section>
        <h2>Resultados</h2>

        {this.state.resultados.map((pelicula) => (
          <Pelicula_individual
            key={pelicula.id}
            id={pelicula.id}
            imagen={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            nombre={pelicula.title}
            descripcion={pelicula.overview}
          />
        ))}
      </section>
    );
  }
}

export default Resultados;