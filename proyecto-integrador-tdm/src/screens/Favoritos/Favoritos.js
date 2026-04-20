import React, { Component } from "react";
import Item_individual from "../../components/Item_individual/Item_individual";

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state = {  
            infoFav: [],
            loading: true
        };
    }
   
    componentDidMount(){
        let peliculasGuardadas = localStorage.getItem('favPeliculas');
        let storageRecuperado = JSON.parse(peliculasGuardadas);
        
        if (storageRecuperado == null) {
            storageRecuperado = [];
        }

        // Si no hay favoritos, dejo de cargar
        if (storageRecuperado.length === 0) {
            this.setState({ loading: false });
            return;
        }

        let arrayPeliculas = [];

        // Recorro los favoritos guardados (cada uno tiene id y tipo)
        storageRecuperado.map(item => {

            let url;
            if (item.tipo === "tv") {
                url = `https://api.themoviedb.org/3/tv/${item.id}`;
            } else {
                url = `https://api.themoviedb.org/3/movie/${item.id}`;
            }

            fetch(url, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE0MmM2Y2E4ZmM3MTg2OTM0NDU1MDQ2ZGM3NjM2OSIsIm5iZiI6MTc3NDU1OTQ0Mi4xMzY5OTk4LCJzdWIiOiI2OWM1YTBkMmIwNjQ3OWNkYjQ0MjFiMGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o5IT_ep0A_LgC8mJgaQmE9oW3CTTtgeN52AN9v8FlyE"
                }
            })
            .then((response) => response.json())
            .then((data) => {

                // Guardo tanto los datos como el tipo (para después saber cómo renderizar)
                arrayPeliculas.push({
                    data: data,
                    tipo: item.tipo
                });
                // Como fetch es async, esperamos a que terminen TODOS
                // comparando cantidad cargada vs cantidad guardada
                if (arrayPeliculas.length === storageRecuperado.length) {
                    this.setState({
                        infoFav: arrayPeliculas,
                        loading: false
                    });
                }

            })
            .catch((error) => console.log(error));
        });
    }

    render(){
        if (this.state.loading) {
            return <h2>Cargando...</h2>
        }

        return(
            <div>
                <h1>Mis Favoritos</h1>
                <section className="seccionFavoritos">
                    {this.state.infoFav.map(item => (
                        <Item_individual
                            key={item.data.id}
                            id={item.data.id}
                            imagen={`https://image.tmdb.org/t/p/w500${item.data.poster_path}`}
                            // películas usan title, series usan name
                            nombre={
                                item.data.title 
                                ? item.data.title 
                                : item.data.name}
                            descripcion={item.data.overview}
                            tipo={item.tipo}
                        />
                    ))}

                </section>
            </div>
        );
    }
}

export default Favoritos;