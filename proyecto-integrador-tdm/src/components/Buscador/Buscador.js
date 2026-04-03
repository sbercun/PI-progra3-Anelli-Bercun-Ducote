import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: ""
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push("/resultados/" + this.state.busqueda);
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
        </form>
      </div>
    );
  }
}

export default withRouter(Buscador);