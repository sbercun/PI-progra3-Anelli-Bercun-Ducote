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
    if (this.state.tipo === "") {
    alert("Elegí Película o Serie");
    return;}

    event.preventDefault();
    this.props.history.push(`/resultados/${this.state.tipo}/${this.state.busqueda}`);
  }

  guardarBusqueda(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.onSubmit(event)}>
          <input type="text" onChange={(event) => this.guardarBusqueda(event)} value={this.state.busqueda}/>
          <button type="submit">Buscar</button>
          <button type="button" onClick={() => this.setState({ tipo: "movie" })} style={{ backgroundColor: this.state.tipo === "movie" ? "lightblue" : "white" }} > Película </button>
          <button type="button" onClick={() => this.setState({ tipo: "tv" })} style={{backgroundColor: this.state.tipo === "tv" ? "lightblue" : "white"}}> Series </button>
          {/* el style cambia el color del boton segun si lo selecciono el usuario o no */}
        </form>
      </div>
    );
  }
}

export default withRouter(Buscador);