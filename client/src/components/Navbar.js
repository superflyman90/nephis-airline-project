import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className='title'><NavLink to="/">Nephis Airline</NavLink></h1>
            <nav className="navbar_menu">
                <ul className="navbar_menu_list">
                    <li className="navbar_menu_item">
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className="navbar_menu_item">
                        <NavLink to='/pilotes'>Pilotes</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;