import React from 'react';
import { NavLink } from 'react-router-dom';

const Connexion = () => {
    return (
        <div className="connexion">
            <li className="connect">
                <NavLink to="/">Connexion <span><i class="fa-solid fa-right-to-bracket"></i></span> </NavLink>
            </li>
        </div>
    );
};

export default Connexion;