import React from 'react';
import './../../styles/layout/Footer.css'
import rrss1 from './../../img/tw.png'
import rrss2 from './../../img/fb.png'
import rrss3 from './../../img/insta.png'
import rrss4 from './../../img/yt.png'
import bracket from './../../img/bracket.png'

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="rrss">
                <ul>
                    <li><img src={rrss1} alt="foto" /></li>
                    <li><img src={rrss2} alt="foto" /></li>
                    <li><img src={rrss3} alt="foto" /></li>
                    <li><img src={rrss4} alt="foto" /></li>
                </ul>
            </div>
            <div className="info">
                <div className="staff">
                    <h4>Staff</h4>
                    <img className="bracket" src={bracket} alt="bracket" />
                    <ul>
                        <li>
                            <h5>Director</h5>
                            <p>Juan Carlos Codsutter</p>
                        </li>
                        <li>
                            <h5>Jefa de Profesores</h5>
                            <p>Mariana Piltriquitron</p>
                        </li>
                        <li>
                            <h5>Secretario</h5>
                            <p>Marcos Simprioza</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright ODB 2021</p>
            </div>
        </div>
    );
}

export default Footer