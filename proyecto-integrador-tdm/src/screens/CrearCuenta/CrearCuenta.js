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




        let usuariosGuardados = localStorage.getItem('usuarios');




        if (usuariosGuardados === null) {
            usuariosGuardados = [];
        } else {
            usuariosGuardados = JSON.parse(usuariosGuardados);
        }




        let usuariosConEseEmail = usuariosGuardados.filter((usuario) => {
            return usuario.email === this.state.email;
        });


        if (usuariosConEseEmail.length > 0) {
            this.setState({ error: "El email ya está en uso" });
            return;
        }


        if (this.state.password.length < 6) {
            this.setState({ error: "La contraseña debe tener al menos 6 caracteres" });
            return;
        }


        let nuevoUsuario = {
            email: this.state.email,
            password: this.state.password
        };


        usuariosGuardados.push(nuevoUsuario);


        localStorage.setItem("Usuarios", JSON.stringify(usuariosGuardados));


        this.setState({
            email: "",
            password: "",
            error: "",
        });


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


                {this.state.error !== "" ? <p>{this.state.error}</p> : null}


            </div>
        );
    }
}




export default CrearCuenta;


