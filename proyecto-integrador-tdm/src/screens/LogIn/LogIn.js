import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    controlarEmail(event) { 
        this.setState({
            email: event.target.value
        });
    }

    controlarPassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    evitarSubmit(event) {
        event.preventDefault();
    }
    
    onSubmit(email, password){
        //verificaciones de usuario ya registrado (email ya existe) y contraseña que coincide con el email
            //recuperar solo el email ingresado y verificar si coincide con la conytraseña ingresada.
        
        let usuarios = [];
        let usuariosGuardados = localStorage.getItem("Usuarios");
        
        if (usuariosGuardados !== null) {
            usuarios = JSON.parse(usuariosGuardados);
        }

        //busco el usuario que coincida con el email ingresado
        let resultado = usuarios.filter((usuario) => {
            return usuario.email === email;
        });

        //variable donde guardo el usuario que coincida con el email ingresado
        let user = resultado[0]; 

        //nos fijamos si el usuario existe y si la contraseña coincide
        if (user && user.password === password) {
            //creo la cookie de sesion
            cookies.set('user-auth-cookie', user.email);
            this.props.history.push("/");
        } else {
            this.setState({ error: "Credenciales incorrectos" });
        } 
    }


    render() {
        return (
           <div>
                <h1>Login</h1>

                <form onSubmit={(event) => {
                    this.evitarSubmit(event);
                    this.onSubmit(this.state.email, this.state.password);
                    }}>

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

                    <button type="submit">Log In</button>
                </form>


                {this.state.error !== "" ? <p>{this.state.error}</p> : null}
            </div>
        )
    }
}




export default LogIn;


