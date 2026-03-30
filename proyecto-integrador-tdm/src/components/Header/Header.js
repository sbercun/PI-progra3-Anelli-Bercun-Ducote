import React from 'react';
import Menu from '../Menu/Menu';

function Header(){
    return(
       <div>
            <img className='logo' src="./public/img/logoSfondo.jpg" alt=""/>
            <nav className='header'>
                <Menu />
            </nav>
        </div>
    )
}

export default Header;