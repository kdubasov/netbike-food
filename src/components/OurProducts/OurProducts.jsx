import React from 'react';
import './OurProducts.css';
import './OurProductsMedia.css';
import {Fade} from "react-awesome-reveal";


const OurProducts = () => {
    return (
        <div className={`OurProducts container`}>
            <Fade className={'img-OurProducts-big'} direction={'right'}>
                <img src="/images/OurProducts/truck.svg" alt="" className="truck"/>
            </Fade>

            <div className="content">
                <Fade delay={400}>
                <h2>Любая продукция</h2>
                <h6>для доставки в локации города</h6>
                <hr/>
                <div className="images">
                    <img src="/images/OurProducts/tarelka.svg" alt="Тарелка"/>
                    <img src="/images/OurProducts/pizza.svg" alt="Пицца"/>
                    <img src="/images/OurProducts/flower.svg" alt="Цветы"/>
                    <img src="/images/OurProducts/glass.svg" alt="Стакан"/>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default OurProducts;