import React from 'react';
import imgCanto from './../img/canto.jpg'
import imgGuitarra from './../img/guitarras.jpg'
import imgPiano from './../img/piano.jpg'
import imgBateria from './../img/bateria.jpg'
import imgBajo from './../img/bajo.jpg'
import imgSaxo from './../img/saxofon.jpg'
import imgDj from './../img/dj.jpg'
import './../styles/pages/Instrumentos.css'

const Instrumentos = () => {
    return(
        <div className="instruments">
            <div className="container">
            <div className="intro">
                <h2>Elegi tu instrumento y comenzá hoy mismo.</h2>
                <p>Nunca es tarde para aprender a tocar un instrumento! Te invitamos a ver las opciones dentro de nuestra escuela, para que desarrolles tu creatividad y talento mas allá de lo que tu mismo te imaginas.</p>
            </div>
            <div className="inst-list">
                <div className="inst-item">
                    <img src={imgCanto} alt="item" />
                    <h4>Canto</h4>
                    <ul className="skills">
                        <li>Respiración</li>
                        <li>Técnica Vocal</li>
                        <li>Proyección de la voz</li>
                        <li>Resonancia</li>
                    </ul>
                    <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Inscribirme</a></button>
                </div>
                <div className="inst-item">
                    <img src={imgGuitarra} alt="item" />
                    <h4>Guitarra</h4>
                    <ul className="skills">
                        <li>Postura</li>
                        <li>Digitación</li>
                        <li>Sonoridad</li>
                        <li>Armonia</li>
                    </ul>
                    <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Inscribirme</a></button>
                </div>
                <div className="inst-item">
                    <img src={imgPiano} alt="item" />
                    <h4>Piano</h4>
                    <ul className="skills">
                        <li>Lectura</li>
                        <li>Independencia de manos</li>
                        <li>Pedal</li>
                        <li>Armonia</li>
                    </ul>
                    <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Inscribirme</a></button>
                </div>
                <div className="inst-item">
                    <img src={imgBateria} alt="item" />
                    <h4>Bateria</h4>
                    <ul className="skills">
                        <li>Técnica</li>
                        <li>Ritmo</li>
                        <li>Drum sets</li>
                        <li>Doble pedal</li>
                    </ul>
                    <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Inscribirme</a></button>
                </div>
                <div className="inst-item">
                    <img src={imgBajo} alt="item" />
                    <h4>Bajo</h4>
                    <ul className="skills">
                        <li>Digitación</li>
                        <li>Walking</li>
                        <li>Slap</li>
                        <li>Armonia</li>
                    </ul>
                    <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Inscribirme</a></button>
                </div>
                <div className="inst-item">
                    <img src={imgSaxo} alt="item" />
                    <h4>Saxofon</h4>
                    <ul className="skills">
                        <li>Respiracion</li>
                        <li>Tecnica de lengüeta</li>
                        <li>Digitacion</li>
                        <li>Escalas</li>
                    </ul>
                    <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Inscribirme</a></button>
                </div>
                <div className="inst-item">
                    <img src={imgDj} alt="item" />
                    <h4>DJ <br /> (Produccion Musical)</h4>
                    <ul className="skills">
                        <li>Dj set</li>
                        <li>Mixing</li>
                        <li>Sampling</li>
                        <li>Ableton Live</li>
                    </ul>
                    <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Inscribirme</a></button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Instrumentos