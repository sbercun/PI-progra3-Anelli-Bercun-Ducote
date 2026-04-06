import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Peliculas_cartelera from "./screens/Peliculas_cartelera/Peliculas_cartelera";
import Favoritos from "./screens/Favoritos/Favoritos";
import Peliculas_populares from "./screens/Peliculas_populares/Peliculas_populares";
import LogIn from "./screens/LogIn/LogIn";
import CrearCuenta from "./screens/CrearCuenta/CrearCuenta";
import NotFound from "./screens/NotFound/NotFound";
import Detalle from "./screens/Detalle/Detalle";
import Resultados from "./screens/Resultados/Resultados";
import { Switch, Route } from "react-router-dom";


function App() {
  return (

    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/peliculas_populares" component={Peliculas_populares}/>
        <Route path="/peliculas_cartelera" component={Peliculas_cartelera}/>
        <Route path="/Detalle/:id" component={Detalle} />
        <Route path="/resultados/:tipo/:texto" component={Resultados} />
        <Route path="/favoritos" component={Favoritos}/>
        <Route path="/logIn" component={LogIn}/>
        <Route path="/signIn" component={CrearCuenta}/>
        <Route path="*" component={NotFound}/>
      </Switch>
      <Footer />
    </React.Fragment>
    
  );
}

export default App;
