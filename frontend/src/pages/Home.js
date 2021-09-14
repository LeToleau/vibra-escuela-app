import React from'react';
import './../styles/pages/Home.css'
import imgMusic from './../img/music.png'
import imgMusic1 from './../img/music1.png'
import imgMusic2 from './../img/music2.png'
import imgMusic3 from './../img/music3.png'
import logo from './../vibra2.png'

const Home = (props) => {
    return (
        <div className="homepage">
            <div className="marquee">
                <img src={logo} alt="logo" />
                <h2>Aprende un Instrumento en Clases Virtuales o Presenciales</h2>
                <p>Habilitamos nuevamente las clases presenciales con protocolos en nuestra institucion</p>    
            </div>
            <div className="info">
                <div className="services container">
                    <div className="services-item">
                        <img src={imgMusic} alt="img" />
                        <h3>Actividades Prácticas</h3>
                        <p>Para ser un gran músico, necesitarás practicar. Te guiaremos a través de tu crecimiento en el instrumento con las prácticas más completas.</p>            
                    </div>
                    <div className="services-item">
                        <img src={imgMusic1} alt="img" />
                        <h3>Lenguaje Musical</h3>
                        <p>Es muy importante entender lo que estas tocando. Para eso aprenderás lecto-escritura, solfeo y armonía de parte de nuestros expertos profesores.</p>            
                    </div>
                    <div className="services-item">
                        <img src={imgMusic2} alt="img" />
                        <h3>Ensambles de Instrumento</h3>
                        <p>La interacción con otros músicos te ayudará a completar tus habilidades. Tambien lograrás una mayor comprensión del rol de tu instrumento en un grupo.</p>            
                    </div>
                    <div className="services-item">
                        <img src={imgMusic3} alt="img" />
                        <h3>Grabaciones</h3>
                        <p>Tendrás sesiones de grabación de tu repertorio. De esta manera podrás ver plasmado tu progreso en el instrumento.</p>            
                    </div>
                </div>
                <div className="institutional">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/l7iprMgs-jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="institutional-desc">
                        <h2>Conoce nuestra Escuela</h2>
                        <p>En este video te presentamos las instalaciones y nuestro staff. Estamos esperando ansiosamente el retorno a las aulas para compartir y aprender juntos haciendo música!</p>
                    </div>
                </div>
                <div className="statistics"></div>
            </div>
            <div className="banner">
                <h2>Que instrumento queres aprender?</h2>
                <button type="button" className="btn btn-secondary"><a href="/Instrumentos">Descubrir</a></button>
            </div>
        </div>
    );
}

export default Home