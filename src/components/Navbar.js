import React from 'react';
import logo from '../assets/logo.svg';
// import navbar.css;




export default function Navbar(){
    return (
        <div className="concept__navbar">
            <div className="concept__navbar-links">
                <div className="concept__navbar-links logo">
                    <img src={logo} alt="logo"/>
                    <h1>Navbar temp text</h1>
                </div>

            </div>

        </div>
    )
}