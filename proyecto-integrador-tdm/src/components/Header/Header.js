import React from 'react';
import Menu from '../Menu/Menu';
import Cookies from "universal-cookie";

function Header() {
    const cookies = new Cookies();

    function logout() {
        cookies.remove("user");
        window.location.href = "/"
    }

    let usuario = cookies.get("user");

    return (
        <div className="main-header">

            <div className="header-logo-container">
                <img className="logo" src="/img/logoSfondo.png" alt="Logo" />
            </div>

            <nav className='header'>
                <Menu />

                {usuario && (
                    <button onClick={logout}>
                        Logout
                    </button>
                )}
            </nav>
        </div>
    )
}

export default Header;