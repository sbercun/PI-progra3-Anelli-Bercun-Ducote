import React, {Component} from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie"; 

const cookies = new Cookies(); 

class Pelicula_individual extends Component{
    constructor(props){
    super(props)
    this.state={
      VerDesc:false,
      esFav: false,
      haySesion: false
    }
  }
  mostrar = () => {
  this.setState({
    VerDesc: true
  });
};

ocultar = () => {
  this.setState({
    VerDesc: false
  });
};

agregarFav(id){
  let peliculasGuardadas = localStorage.getItem('favPeliculas');
  let storageRecuperado = JSON.parse(peliculasGuardadas)
  
  //casos que devuelva NULL
  if (storageRecuperado == null) {
    let primerValor = [id];
    let primerValorString = JSON.stringify(primerValor)
    localStorage.setItem('favPeliculas', primerValorString)
  } else{ //casos que devuelva un array con datos
    storageRecuperado.push( id )
    let storageString = JSON.stringify( storageRecuperado )
    localStorage.setItem( 'favPeliculas', storageString )
  }
  this.setState( {esFav: true} )
}

sacarFav(id){
  let peliculasGuardadas = localStorage.getItem('favPeliculas');
  let storageRecuperado = JSON.parse(peliculasGuardadas)
  
  //filtro quedandome con todo menos el id que quiero sacar de favoritos
  let storageFiltrado = storageRecuperado.filter( pelicula => pelicula !== id )

  //Convierto el resultado a string para guardarlo en el localStorage
  let nuevoArrayString = JSON.stringify(storageFiltrado)
  
  //guardo el nuevo array filtrado en el localStorage
  localStorage.setItem('favPeliculas', nuevoArrayString)

  //cambio el estado a False para que aparezca el boton de agregar a favoritos
  this.setState( {esFav: false} )
}

componentDidMount(){
  //tengo que hacer un if para que cuando recargue la pagina, se mantenga el sacar de favoritos o agregar a favoritos
  let peliculasGuardadas = localStorage.getItem('favPeliculas');
  let storageRecuperado = JSON.parse(peliculasGuardadas)
  
  if (storageRecuperado !== null) {
    let esFavorito = storageRecuperado.filter(peliculaId => peliculaId === this.props.id);
    this.setState({ esFav: esFavorito.length > 0 });
  }
// Verifico si existe la cookie de sesión creada en el login.
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
              <h2 className="peliculas-title">{this.props.nombre} </h2> 
              <p className={this.state.VerDesc ? "mostrar" : "ocultar"}>{this.props.descripcion}</p>
              <button className="peliculas-button" onClick={() => this.state.VerDesc ? this.ocultar() : this.mostrar()}> {this.state.VerDesc ? "Ver menos" : "Ver mas"}</button>
              {botonFav}
              <Link className="peliculas-button" to={`/Detalle/${this.props.id}`}>Ir a detalle</Link>
            </div>
        </article>

    )
}
    
}
export default Pelicula_individual;