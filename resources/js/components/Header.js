import React from 'react';
import { NavLink } from "react-router-dom";

function App() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to='/'>Task App</NavLink>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="https://www.youtube.com/watch?v=k1xg6S-66Ew" target='_blank' className='nav-link'>Tutorial CRUD</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://programmingfields.com/react-login-and-registration-app-using-laravel-7-api/" target='_blank' className='nav-link'>Tutorial Login</a>
                        </li>
                    </ul>
                </div>
                <NavLink className='btn btn-outline-light' to="/login">Login</NavLink>
            </div>
        </nav>
    );
}

export default App;
