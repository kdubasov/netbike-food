import React from 'react';
import './Services.css';
import {Fade} from "react-awesome-reveal";

const Services = () => {

    const data = [
        {
            id:0,
            img:'/images/Services/brand.svg',
            text:'брендирование страниц;',
        },
        {
            id:1,
            img:'/images/Services/seo.svg',
            text:'инструменты для таргетологов и SEO;',
        },
        {
            id:2,
            img:'/images/Services/uxui.svg',
            text:'UX/UI дизайн интерфейсов;',
        },
        {
            id:3,
            img:'/images/Services/func.svg',
            text:'широкий базовый функционал;',
        },
        {
            id:4,
            img:'/images/Services/develop.svg',
            text:'профессиональная разработка;',
        },
        {
            id:5,
            img:'/images/Services/anketa.svg',
            text:'множество компонентов и отраслевые опции;',
        }
    ];

    return (
        <Fade direction={500}>
            <div className={'Services container'}>
                {
                    data.map(elem =>(
                        <div className={'block'} key={elem.id}>
                            <img src={elem.img} alt=""/>
                            <h6>{elem.text}</h6>
                        </div>
                    ))
                }
            </div>
        </Fade>
    );
};

export default Services;