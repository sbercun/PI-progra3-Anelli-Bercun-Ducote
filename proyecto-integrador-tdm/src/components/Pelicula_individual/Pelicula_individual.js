import React, {Component} from "react";
import { Link } from "react-router-dom";

class Pelicula_individual extends Component{
    constructor(props){
    super(props)
    this.state={
      VerDesc:false
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
    render(){
        return(
            <article className='pelicula'>
                <img src={this.props.imagen} alt="" />
                <h2>{this.props.nombre} </h2> 
                <p className={this.state.VerDesc ? "mostrar" : "ocultar"}>{this.props.descripcion}</p>
                <button onClick={() => this.state.VerDesc ? this.ocultar() : this.mostrar()}> {this.state.VerDesc ? "Ver menos" : "Ver mas"}</button>
                <Link to={`/Detalle/${this.props.id}`}>Ir a detalle</Link>
            </article>

        )
    }
    
}
export default Pelicula_individual;