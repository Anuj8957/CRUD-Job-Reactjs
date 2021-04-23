import React from 'react'
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Users</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-current="page" exact to="/contact">Contact</NavLink>
                        </li>
                   
                    </ul>
                </div>
                <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;