import React from 'react';
import './AfterForm.css';
import './AfterFormMedia.css';

const AfterForm = () => {
    return (
        <div className={`AfterForm container`}>
            <div className="content">
                <span>
                    <h4>Спасибо за проявленный интерес к нашему сервису!</h4>
                    <h6>В течении одного рабочего дня с вами свяжется наш проект-менеджер</h6>
                </span>
                <h4>
                    Телефон для справок: <a href="tel:+78313234234">+7(8313)234-234</a>
                </h4>
            </div>

            <img src="/images/AfterForm/smile.svg" alt=""/>
        </div>
    );
};

export default AfterForm;