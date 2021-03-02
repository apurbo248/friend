import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <h3>friendZONE</h3>
            </div>
            <div className="a">
                <ul>
                    <li><a href="\friendlist">Friendlist</a></li>
                    <li> <a href="\about">About</a></li>
                    <li> <a href="\contact">Contact</a></li>
                </ul>
            </div>
            </div>
    );
};

export default Header;