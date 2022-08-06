import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header">            
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;