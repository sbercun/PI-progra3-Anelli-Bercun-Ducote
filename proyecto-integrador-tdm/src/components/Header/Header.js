import React from 'react';
import Menu from '../Menu/Menu';

function Header(){
    return(
       <div className="main-header">
            
            <div className="header-logo-container">
                <img className="logo" src="/img/logoSfondo.png" alt="Logo" />
            </div>

            <nav className='header'>
                <Menu />
            </nav>
        </div>
    )
}

export default Header;