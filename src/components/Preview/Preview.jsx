import React from 'react';
import './Preview.css';
import './PreviewMedia.css';
import {Fade} from "react-awesome-reveal";

const Preview = () => {
    return (
        <Fade delay={200}>
        <div className={`Preview`}>
            <Fade delay={900}>
                <div className="container">
                    <img src="/images/logo.svg" alt="" className="logo"/>
                    <h1>Решение для доставки продукции</h1>
                    <h5>Информационная система для управления вашим бизнесом</h5>
                    <a href="#form">Заказать</a>
                </div>
            </Fade>
        </div>
        </Fade>
    );
};

export default Preview;