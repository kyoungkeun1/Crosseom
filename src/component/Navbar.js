import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar (){
    return(
        <div>
            <nav className="navbar">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">//Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.//<path d="M248 0H208c-26.5 0-48 21.5-48 48V160c0 35.3 28.7 64 64 64H352c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48H328V80c0 8.8-7.2 16-16 16H264c-8.8 0-16-7.2-16-16V0zM64 256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H184v80c0 8.8-7.2 16-16 16H120c-8.8 0-16-7.2-16-16V256H64zM352 512H512c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64H472v80c0 8.8-7.2 16-16 16H408c-8.8 0-16-7.2-16-16V256H352c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2V464c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512z"/></svg>
                    <a className="nav-logoword">CROSSEOM</a>
                </div>
                <div>
                    <ul className="navbar-menu">
                        <li><Link to="/test">popular</Link></li>
                        <li><Link to="/test">post</Link></li>
                        <li><Link to="/test">tip</Link></li>
                        <li><Link to="/test">art</Link></li>
                    </ul>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">//Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.//<path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                    <Link className='login' to="/page/Signin">login</Link>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;