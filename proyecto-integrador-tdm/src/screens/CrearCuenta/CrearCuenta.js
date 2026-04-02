import React, { Component } from "react";
import Header from '../../components/Header/Header';


class CrearCuenta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }




    evitarSubmit(event) {
        event.preventDefault();
    }


    controlarEmail(event) {
        this.setState({ email: event.target.value });
    }


    controlarPassword(event) {
        this.setState({ password: event.target.value });
    }




    render() {
        return (
            <div>


                <React.Fragment>
                    <h2>Crear cuenta</h2>
                </React.Fragment>




                <form onSubmit={(event) => this.evitarSubmit(event)}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event) => this.controlarEmail(event)} />


                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={this.state.password}
                        onChange={(event) => this.controlarPassword(event)} />


                    <button type="submit">Crear cuenta</button>
                </form>
            </div>
        );
    }
}








export default CrearCuenta;
