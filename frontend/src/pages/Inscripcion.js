import React, { useState } from 'react';
import axios from 'axios';
import './../styles/pages/Inscripcion.css'

const Inscripcion = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await 
        axios.post('http://localhost:3000/api/inscripcion', formData);
        setSending(false);
        setMsg(response.data.message);

        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <div className="inscripcion">
            <div className="container">
                <div className="insc-inner">
                    <h2>Inscribite!</h2>
                    <p>La inscripcion es gratuita y recibiras un mail para coordinar los dias y horarios de cursada.</p>
                </div>
                <div class="insc-form">
                    <form method="" action="" className="form" onSubmit={handleSubmit} >
                        <p>
                            <label>Nombre: </label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Email: </label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Telefono: </label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p className="textarea">
                            <label>Cuentanos lo que buscas aprender: </label>
                            <textarea type="text" name="mensaje" value={formData.mensaje} onChange={handleChange} rows="8"></textarea>
                        </p>
                        <p className="centrar"><input type="submit" value="Enviar" className="btn btn-success" />{sending ? <span>Enviando...</span> : null}
                        {msg ? <span>{msg}</span> : null}
                        </p>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Inscripcion