import React from 'react';
import "./Navbar.css";

function Navbar (){
    return(
        <div>
            <p>Hello world</p>
            <div className='Navbar'>
                <a className="navbar" href="#">logo</a>
                    <ul className="navbar">
                    <li><a className="navbar-menu" href="#">menu1</a></li>
                    <li><a className="navbar-menu" href="#">menu2</a></li>
                    <li><a className="navbar-menu" href="#">menu3</a></li>
                    <li><a className="navbar-menu" href="#">menu4</a></li>
                    <li><a className="navbar-menu" href="#">menu5</a></li>
                    </ul>
            </div>
        </div>
    )
}
export default Navbar;