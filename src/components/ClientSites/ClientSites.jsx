import React from 'react';
import './ClientSites.css';
import './ClientsSitesMedia.css';

const ClientSites = () => {

    const data = [
        {
            id:'saitOne',
            img:'/images/Sites/dev1.svg',
            zagolovok:'Сакура',
            podZagolovok:'Доставка еды',
            textTop:'2021 год создания',
            textBot:'3 месяца разработка и внедрение',
            gradient:'linear-gradient(90deg, #F093FB 0%, #F5576C 100%)'
        },
        {
            id:'saitTwo',
            img:'/images/Sites/dev2.svg',
            zagolovok:'Ранчо 636',
            podZagolovok:'Доставка еды',
            textTop:'2019 год создания',
            textBot:'1 месяц разработки и внедрение',
            gradient:'linear-gradient(90deg, #C79081 0%, #DFA579 100%)'
        },
        {
            id:'saitThree',
            img:'/images/Sites/dev3.svg',
            zagolovok:'Суши-стар',
            podZagolovok:'Доставка еды',
            textTop:'2017 год создания',
            textBot:'6 месяцев разработки и внедрение',
            gradient:'linear-gradient(90deg, #13547A 0%, #80D0C7 100%)'
        },
    ]

    return (
        <div className={`ClientSites container`}>
            <h3>Сайты наших клиентов</h3>
            <div className="content">
                {
                    data.map(elem =>(
                        <div
                            key={elem.id}
                            className={`sait-block`}
                            style={{background:`${elem.gradient}`}}
                        >
                            <img src={elem.img} alt=""/>
                            <div className="content-inner">
                                <h4>{elem.zagolovok}</h4>
                                <p className={'podzag'}>{elem.podZagolovok}</p>

                                <span>
                                    <p>{elem.textTop}</p>
                                    <p>{elem.textBot}</p>
                                </span>
                            </div>
                            <a href="/">Посмотреть</a>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ClientSites;