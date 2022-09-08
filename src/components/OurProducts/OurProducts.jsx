import React from 'react';
import './OurProducts.css';

const OurProducts = () => {
    return (
        <div className={`OurProducts container`}>
            <img src="/images/OurProducts/truck.svg" alt="" className="truck"/>
            <div className="content">
                <h2>Любая продукция</h2>
                <h6>для доставки в локации города</h6>
                <hr/>
                <div className="images">
                    <img src="/images/OurProducts/tarelka.svg" alt="Тарелка"/>
                    <img src="/images/OurProducts/pizza.svg" alt="Пицца"/>
                    <img src="/images/OurProducts/flower.svg" alt="Цветы"/>
                    <img src="/images/OurProducts/glass.svg" alt="Стакан"/>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;