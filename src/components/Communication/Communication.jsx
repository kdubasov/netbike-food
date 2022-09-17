import React from 'react';
import './Communication.css';
import './CommunicationMedia.css';
import {Slide} from "react-awesome-reveal";

const Communication = () => {

    const data = [
        {
            id:1,
            img:'/images/Communication/1.svg',
            text:'Продолжительность презентации 30 минут',
        },
        {
            id:2,
            img:'/images/Communication/2.svg',
            text:'По предварительной записи в удобное время',
        },
        {
            id:3,
            img:'/images/Communication/3.svg',
            text:'Демонстрация всех возможностей веб-платформы',
        },
        {
            id:4,
            img:'/images/Communication/4.svg',
            text:'Встреча проводится в Яндекс.Телемост',
        },
    ]

    return (
        <div style={{overflow:"hidden"}} className={`Communication container`}>
            <a name={'form'}></a>
            <h2>Стоимость</h2>
            <h5>
                Составить бизнес-требования проекта и познакомиться с возможностями нашей веб-платформы,
                мы предлагаем в формате презентации. По результатам встречи,
                мы сформируем для вас комплектацию и ценовое предложение
            </h5>

            <div className="content">
                {
                    data.map((elem,ids) =>(
                        <div key={elem.id} className={'block'}>
                            <Slide direction={'up'} delay={ids * 150}>
                                <img src={elem.img} alt={elem.text}/>
                                <h6>{elem.text}</h6>
                            </Slide>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Communication;