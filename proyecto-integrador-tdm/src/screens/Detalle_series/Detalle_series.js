import React, { Component } from "react";
import Cookies from "universal-cookie"; 

const cookies = new Cookies(); 

class Detalle_series extends Component{
    constructor(props) {
        super(props);
        this.state = {
            serie: null,
            esFav: false,
            haySesion: false,
            VerDesc: false
        };
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
            storageRecuperado.push(id)
            let storageString = JSON.stringify(storageRecuperado)
            localStorage.setItem('favPeliculas', storageString)
        }
        this.setState({esFav: true})
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
        this.setState( {esFav: false} )}


    componentDidMount(){
        const serie_id = this.props.match.params.serie_id;

        let peliculasGuardadas = localStorage.getItem('favPeliculas');
        let storageRecuperado = JSON.parse(peliculasGuardadas)
        
        if (storageRecuperado !== null) {
            let esFavorito = storageRecuperado.filter(peliculaId => peliculaId == serie_id);
            this.setState({ esFav: esFavorito.length > 0 });
        }

        let sesion = cookies.get("user-auth-cookie");
        if (sesion !== undefined) {
            this.setState({ haySesion: true });
        }

        fetch(`https://api.themoviedb.org/3/tv/${serie_id}`, 
            {method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
        }})
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                serie: data
            });
        })
        .catch((error) => console.log(error));
    }

    render() {
        let botonFav = null;
        const serie_id = this.props.match.params.serie_id;

        if (this.state.haySesion) {
            botonFav = (
                <button 
                    className="boton-ver-todas" 
                    onClick={() => this.state.esFav 
                        ? this.sacarFav(serie_id) 
                        : this.agregarFav(serie_id)
                    }
                >
                    {this.state.esFav ? "Sacar de favoritos" : "Agregar a favoritos"}
                </button>
            );
        }

        const serie = this.state.serie

        if (serie === null) {
            return <p>Serie no disponible</p>
        }

        return (
            <section>
                <h1>{serie.name}</h1>
                <div className="container_detalle">
                    <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="" />
                    <div className="detalles">
                        <p>Rating: {serie.vote_average}</p>
                        <p>Fecha: {serie.first_air_date}</p>
                        <p>{serie.overview}</p>
                        <p> Géneros: {serie.genres.map((genero) => genero.name).join(", ")} </p>
                        {botonFav}
                    </div>
                </div>
            </section>
        );
    }
} 

export default Detalle_series;