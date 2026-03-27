import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import Series from "./screens/Series/Series";
import Favoritos from "./screens/Favoritos/Favoritos";
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
    </React.Fragment>
    
    //<div className="App">
      //<header className="App-header">
       // <img src={logo} className="App-logo" alt="logo" />
        //<p>
         // Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
         // className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
       // >
       //   Learn React
       // </a>
     // </header>
   // </div>
  );
}

export default App;
