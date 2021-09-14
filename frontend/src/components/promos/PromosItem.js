import React from 'react';

const PromosItem = (props) => {
    const { title, description, imagen, price } = props;
    return (
        <div className="promo-item-list">
            <div className="promo-item">
                <img src={imagen} alt="promo" />
                <div className="tit-desc">
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
                <p>{price} <button type="button" className="btn btn-secondary"><a href="/Inscripcion">Adquirir</a></button></p>
            </div>
        </div>
    )
}

export default PromosItem