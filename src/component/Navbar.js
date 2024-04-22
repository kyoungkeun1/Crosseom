import React from 'react';
import "./Navbar.css";

function Navbar (){
    return(
        <div>
            <div className='Navbar'>
                <ul className="navbar">
                <img className="logo" src={`logo.png`}/>
                <li><a className="navbar-menu" href="#">menu1</a></li>
                <li><a className="navbar-menu" href="#">menu2</a></li>
                <li><a className="navbar-menu" href="#">menu3</a></li>
                <li><a className="login" href="/signin">signin</a></li>
                <li><a className="login" href="/signup">signup</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;