import React from 'react';
import './Preview.css';
import './PreviewMedia.css';

const Preview = () => {
    return (
        <div className={`Preview`}>
            <div className="container">
                <img src="/images/logo.svg" alt="" className="logo"/>
                <h1>Решение для доставки продукции</h1>
                <h5>Информационная система для управления вашим бизнесом</h5>
                <a href="/">Заказать</a>
            </div>
        </div>
    );
};

export default Preview;