import React from 'react';
import './ClientSites.css';
import './ClientsSitesMedia.css';
import {Fade} from "react-awesome-reveal";

const ClientSites = () => {

    //для доставки еды
    const data = [
        {
            id:'saitOne',
            img:'/images/Sites/dev1.svg',
            zagolovok:'Сакура',
            podZagolovok:'Доставка еды',
            textTop:'2021 год создания',
            textBot:'3 месяца разработка и внедрение',
            gradient:'linear-gradient(90deg, #F093FB 0%, #F5576C 100%)',
            link:'https://sakura52.ru/',
        },
        {
            id:'saitTwo',
            img:'/images/Sites/dev2.svg',
            zagolovok:'Ранчо 636',
            podZagolovok:'Доставка еды',
            textTop:'2019 год создания',
            textBot:'1 месяц разработки и внедрение',
            gradient:'linear-gradient(90deg, #C79081 0%, #DFA579 100%)',
            link:'https://dostavka.rancho636.ru/',
        },
        {
            id:'saitThree',
            img:'/images/Sites/dev3.svg',
            zagolovok:'Суши-стар',
            podZagolovok:'Доставка еды',
            textTop:'2017 год создания',
            textBot:'6 месяцев разработки и внедрение',
            gradient:'linear-gradient(90deg, #13547A 0%, #80D0C7 100%)',
            link:'https://dzr.sushi-star.ru/',
        },
    ]

    //не для доставки еды
    const data2 = [
        {
            id:'saitOne',
            img:'/images/Sites/dev23.svg',
            zagolovok:'ЦМК-Аэро',
            podZagolovok:'Поставка решений для авиационной отрасли',
            textTop:'2021 год создания',
            textBot:'3 месяца разработка и внедрение',
            gradient:'#3B5687',
            link:'https://cmk-aero.ru/',
        },
        {
            id:'saitTwo',
            img:'/images/Sites/dev22.svg',
            zagolovok:'Metrail',
            podZagolovok:'Профнастил, металлоконструкции',
            textTop:'2019 год создания',
            textBot:'1 месяц разработки и внедрение',
            gradient:'#6175F6',
            link:'https://metrail.ru/',
        },
        {
            id:'saitThree',
            img:'/images/Sites/dev21.svg',
            zagolovok:'ОкаТеплоСервис',
            podZagolovok:'Осуществление теплоснабжения',
            textTop:'2017 год создания',
            textBot:'6 месяцев разработки и внедрение',
            gradient:'#E28B40',
            link:'https://oka-ts.ru/o-podklyuchenie-k-setyam',
        },
    ]

    return (
        <div className={`ClientSites container`}>
            <h3>Сайты наших клиентов</h3>
            <Fade direction={300}>
            <div className="content">
                {
                    data2.map(elem =>(
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
                            <a target={`_blank`}  href={elem.link}>Посмотреть</a>
                        </div>
                    ))
                }
            </div>
            </Fade>
        </div>
    );
};

export default ClientSites;