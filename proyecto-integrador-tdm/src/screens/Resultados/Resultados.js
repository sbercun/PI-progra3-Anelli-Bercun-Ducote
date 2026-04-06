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
    const tipo = this.props.match.params.tipo;
    // definimos las variables texto y tipo. Su valor viene de la ruta parametrizada en App, que trae la info de Buscador

    fetch(`https://api.themoviedb.org/3/search/${tipo}?query=${texto}`, {
      // usamos "query" porque la API lo requiere para realizar la búsqueda
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          resultados: data.results
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
  return (
    <section>
      <h2>Resultados</h2>

      {this.state.resultados.map((item) => {
        let nombre
        // las series tienen name y las pelis tienen title, entonces definimos la variable "nombre" que depende si el fetch trajo un name o un title 
        if (item.title) {
          nombre = item.title;
        } else {
          nombre = item.name;
        }

        return (
          <Pelicula_individual
            key={item.id}
            id={item.id}
            imagen={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            nombre={nombre}
            descripcion={item.overview}
          />
        );
      })}
    </section>
  );
}
}

export default Resultados;