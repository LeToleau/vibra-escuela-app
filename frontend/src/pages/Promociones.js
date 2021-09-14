import  React, { useEffect, useState } from "react";
import './../styles/pages/Promociones.css'
import axios from 'axios';
import PromosItem from "../components/promos/PromosItem";

    const Promociones = (props) => {
        const [loading, setLoading] = useState(false);
        const [promos, setPromos] = useState([]);
        useEffect(() => {
            const cargarPromos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/promociones');
            setPromos(response.data);
            setLoading(false);
        };
        cargarPromos();
    }, []);

    return (
        
        <div className="promociones">
            <div className="container-fluid">
            { loading ? (
                <p>Cargando...</p>
            ) : (
            promos.map(item => <PromosItem Name
                key={item.id_promo} 
                title={item.title} 
                description={item.description} 
                imagen={item.imagen} 
                price={item.price} />)
            )};
            </div>
        </div>
    )
}

export default Promociones