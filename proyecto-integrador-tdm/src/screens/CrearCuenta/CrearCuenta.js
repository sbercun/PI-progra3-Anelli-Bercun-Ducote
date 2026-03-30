import React, {useState} from "react";
import Header from '../../components/Header/Header';
 
function CrearCuenta(){
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    
    
    function enviarFormulario(event){
        event.preventDefault();
        
        let usuariosGuardados = localStorage.getItem("usuarios");

        if (usuariosGuardados === null) {
            usuariosGuardados = [];
        } else {
            usuariosGuardados = JSON.parse(usuariosGuardados);
        }
        
        let usuariosConEseEmail = usuariosGuardados.filter(function(usuario) {
            return usuario.email === email;
        });

        if (usuariosConEseEmail.length > 0) {
            console.log("El email ya está en uso");
            return;
        }
    

        if (password.length < 6) {
            console.log("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        console.log("Usuario valido, se puede crear la cuenta");


    return(
        <div>
        <React.Fragment>
            <h2>Crear cuenta</h2>
        </React.Fragment>

        <form onSubmit={enviarFormulario  }>
            <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} />

            <input 
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        
            <button type="submit">Crear cuenta</button>
        </form>

</div>
    )

}
}


 export default CrearCuenta;

 