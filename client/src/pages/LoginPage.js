import React from 'react';
import Logo from '../assets/images/Logo.png';

const LoginPage = () => {
    return (
        <div className='login__page'>
            <img src={Logo} alt="logo" />
            <div className="form_connect">
                <h1>Pilot connect</h1>
                <form>
                    <input type="text" placeholder='Pilot ID' />
                    <input type="password" placeholder='Password' />
                    <input type="submit" value="Connexion" />
                </form>
            </div>
        </div>
    );
};

export default LoginPage;