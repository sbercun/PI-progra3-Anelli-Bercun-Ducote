import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { useState } from "react";

function Buscador(props) {
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("");

  function onSubmit(event) {
    // si el usuario no aclara si esta buscando una serie o una pelicula, salta una alerta
    if (tipo === "") {
    alert("Elegí Película o Serie");
    return;}

    event.preventDefault();
    props.history.push(`/resultados/${tipo}/${busqueda}`);
    // cuando se activa el evento, se crea esa ruta y redirije al usuario. Luego, el Route de App.js detecta la ruta y renderiza el componente Resultados
  }

  function guardarBusqueda(event) {
    setBusqueda(event.target.value);
      // target.value representa lo que escribio el usuario (target es el campo html y value su contenido)
  };
    return (
      <div className="search-container">
        <form className="search-form" onSubmit={onSubmit}>
          <input className="search-input" type="text" onChange={guardarBusqueda} value={busqueda}/>
          {/* el evento onChange ejecuta la funcion guardarBusqueda para obtener la información que el usuario va ingresando en el campo. Completamos la propiedad value con el valor del estado para que el usuario vea en pantalla lo que va escribiendo. */}
          <button className="search-button" type="submit">Buscar</button>
          <button className="other-button" type="button" onClick={() => setTipo("movie")} style={{ backgroundColor: tipo === "movie" ? "pink" : "white" }} > Película </button>
          <button className="other-button" type="button" onClick={() => setTipo("tv")} style={{backgroundColor: tipo === "tv" ? "pink" : "white"}}> Series </button>
          {/* cuando el usuario clickea el boton, cambia el valor de la variable "tipo" a movie o tv respectivamente, el style cambia el color del boton segun si lo selecciono el usuario o no */}
        </form>
      </div>
    );
  }    

export default withRouter(Buscador);