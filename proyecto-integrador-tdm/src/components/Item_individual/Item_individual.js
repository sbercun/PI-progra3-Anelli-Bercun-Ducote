import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie"; 

const cookies = new Cookies(); 

class Item_individual extends Component{
  constructor(props){
    super(props)
    this.state={
      VerDesc:false,
      esFav: false,
      haySesion: false
    }
  }

  mostrar = () => {
    this.setState({ VerDesc: true });
  };

  ocultar = () => {
    this.setState({ VerDesc: false });
  };

  agregarFav(id){
    let peliculasGuardadas = localStorage.getItem('favPeliculas');
    let storageRecuperado = JSON.parse(peliculasGuardadas)
    
    if (storageRecuperado == null) {
      let primerValor = [{ id: id, tipo: this.props.tipo }];
      localStorage.setItem('favPeliculas', JSON.stringify(primerValor))
    } else{
      storageRecuperado.push({ id: id, tipo: this.props.tipo })
      localStorage.setItem('favPeliculas', JSON.stringify(storageRecuperado))
    }
    this.setState({esFav: true})
  }

  sacarFav(id){
    let peliculasGuardadas = localStorage.getItem('favPeliculas');
    let storageRecuperado = JSON.parse(peliculasGuardadas)
    
    if (!storageRecuperado) return;

    let storageFiltrado = storageRecuperado.filter(pelicula => pelicula.id.toString() !== id.toString())
    localStorage.setItem('favPeliculas', JSON.stringify(storageFiltrado))
    this.setState({esFav: false})

    window.location.reload();
  }

  componentDidMount(){
    let peliculasGuardadas = localStorage.getItem('favPeliculas');
    let storageRecuperado = JSON.parse(peliculasGuardadas)
    
    if (storageRecuperado !== null) {
      let esFavorito = storageRecuperado.filter(pelicula => pelicula.id.toString() === this.props.id.toString());
      this.setState({ esFav: esFavorito.length > 0 });
    }

    let sesion = cookies.get("user-auth-cookie");
    if (sesion !== undefined) {
      this.setState({ haySesion: true });
    }
  }

  render(){

    let botonFav = null;

    if (this.state.haySesion) {
      botonFav = (
        <button 
          className="peliculas-button" 
          onClick={() => this.state.esFav 
            ? this.sacarFav(this.props.id) 
            : this.agregarFav(this.props.id)
          }
        >
          {this.state.esFav ? "Sacar de favoritos" : "Agregar a favoritos"}
        </button>
      );
    }

    return(
      <article className='pelicula'>
        <img className="pelicula-image" src={this.props.imagen} alt="" />
        <div className="peliculas-body">
          <h2 className="peliculas-title">{this.props.nombre}</h2> 

          <p className={this.state.VerDesc ? "mostrar" : "ocultar"}>
            {this.props.descripcion}
          </p>

          <button 
            className="peliculas-button" 
            onClick={() => this.state.VerDesc ? this.ocultar() : this.mostrar()}
          >
            {this.state.VerDesc ? "Ver menos" : "Ver mas"}
          </button>

          {botonFav}

          <Link 
            className="peliculas-button" 
            to={this.props.tipo === "tv" 
              ? `/Detalle_series/${this.props.id}` 
              : `/Detalle/${this.props.id}`
            }
          >
            Ir a detalle
          </Link>
        </div>
      </article>
    )
  }
}

export default Item_individual;