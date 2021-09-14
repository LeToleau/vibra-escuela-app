import React from 'react';
import logo from './../../vibra.jpg'
import './../../styles/layout/Header.css'
import Nav from './Nav';

const Header = (props) => {
    return ( 
        <div className= "header">
            <div className= "header-marquee">
                <img src = {logo} alt="logo" />
                <div className="title">
                    <h1> Vibra </h1>
                </div>
            </div>
            <h4>Escuela de Musica</h4>
            <Nav />
        </div>
    );
}

export default Header