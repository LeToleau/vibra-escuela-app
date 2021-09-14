import React from 'react'
import { Link } from 'react-router-dom'
import './../../styles/layout/Nav.css'

const Nav = (props) => {
    return (
        <div className="nav">
            <ul className="links">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/Instrumentos">Instrumentos</Link></li>
                <li><Link className="link" to="/Promociones">Promociones</Link></li>
                <li><Link className="link" to="/Inscripcion">Inscripción</Link></li>
            </ul>
        </div>
    )
}

export default Nav