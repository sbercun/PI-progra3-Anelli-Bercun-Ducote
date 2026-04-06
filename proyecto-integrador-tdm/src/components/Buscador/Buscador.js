import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      tipo: ""
    };
  }

  onSubmit(event) {
    // si el usuario no aclara si esta buscando una serie o una pelicula, salta una alerta
    if (this.state.tipo === "") {
    alert("Elegí Película o Serie");
    return;}

    event.preventDefault();
    this.props.history.push(`/resultados/${this.state.tipo}/${this.state.busqueda}`);
    // cuando se activa el evento, se crea esa ruta y redirije al usuario. Luego, el Route de App.js detecta la ruta y renderiza el componente Resultados
  }

  guardarBusqueda(event) {
    this.setState({
      busqueda: event.target.value
      // target.value representa lo que escribio el usuario (target es el campo html y value su contenido)
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <input type="text" onChange={(event) => this.guardarBusqueda(event)} value={this.state.busqueda}/>
          {/* el evento onChange ejecuta la funcion guardarBusqueda para obtener la información que el usuario va ingresando en el campo. Completamos la propiedad value con el valor del estado para que el usuario vea en pantalla lo que va escribiendo. */}
          <button type="submit">Buscar</button>
          <button type="button" onClick={() => this.setState({ tipo: "movie" })} style={{ backgroundColor: this.state.tipo === "movie" ? "pink" : "white" }} > Película </button>
          <button type="button" onClick={() => this.setState({ tipo: "tv" })} style={{backgroundColor: this.state.tipo === "tv" ? "pink" : "white"}}> Series </button>
          {/* cuando el usuario clickea el boton, cambia el valor de la variable "tipo" a movie o tv respectivamente, el style cambia el color del boton segun si lo selecciono el usuario o no */}
        </form>
      </div>
    );
  }
}

export default withRouter(Buscador);