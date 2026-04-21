import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Peliculas_populares from "./screens/Peliculas_populares/Peliculas_populares";
import LogIn from "./screens/LogIn/LogIn";
import CrearCuenta from "./screens/CrearCuenta/CrearCuenta";
import NotFound from "./screens/NotFound/NotFound";
import Detalle from "./screens/Detalle/Detalle";
import Detalle_series from "./screens/Detalle_series/Detalle_series";
import Resultados from "./screens/Resultados/Resultados";
import { Switch, Route } from "react-router-dom";
import Series_todas from "./screens/Series_todas/Series_todas";



function App() {
  return (

    <React.Fragment>
        <Header />

        <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas_populares" component={Peliculas_populares} />
        <Route path="/series_todas" component={Series_todas} />
        <Route path="/Detalle/:id" component={Detalle} />
        <Route path="/Detalle_series/:serie_id" component={Detalle_series} /> 
        <Route path="/resultados/:tipo/:texto" component={Resultados} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/logIn" component={LogIn} />
        <Route path="/signIn" component={CrearCuenta} />
        <Route path="*" component={NotFound} />

      </Switch>
      <Footer />
    </React.Fragment>

  );
}

export default App;
