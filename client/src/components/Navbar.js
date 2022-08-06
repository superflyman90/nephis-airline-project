import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import Connexion from './Connexion';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo nephis" />
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="#">Link</NavLink>
            </li>
            <li>
                <NavLink to="#">Link</NavLink>
            </li>
            <li>
                <NavLink to="#">Link</NavLink>
            </li>
            <li>
                <NavLink to="#">Link</NavLink>
            </li>
            <Connexion />

        </nav>
            
       
    );
};

export default Navbar;