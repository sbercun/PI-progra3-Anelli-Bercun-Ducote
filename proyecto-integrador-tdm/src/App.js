import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Series from "./screens/Series/Series";
import Favoritos from "./screens/Favoritos/Favoritos";
import Peliculas from "./screens/Peliculas/Peliculas";
import LogIn from "./screens/LogIn/LogIn";
import CrearCuenta from "./screens/CrearCuenta/CrearCuenta";
import NotFound from "./screens/NotFound/NotFound";
import { Switch, Route } from "react-router-dom";


function App() {
  return (

    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/peliculas" component={Peliculas}/>
        <Route path="/series" component={Series}/>
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
