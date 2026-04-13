import React, {Component} from "react";
 
class LogIn extends Component {
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
    
// onSubmit(email, password){
//     //verificaciones de usuario ya registrado (email ya existe) y contraseña que coincide con el email
//         //recuperar solo el email ingresado y verificar si coincide con la conytraseña ingresada.
//     //
//     if(user){
//         cookies.set('user-auth-cookie', user.email)
//     }
// }

    render() {
        return (
           <div>
                <h1>Login</h1>

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
        )
    }
}




export default LogIn;


