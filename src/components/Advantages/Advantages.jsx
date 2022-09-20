import React from 'react';
import './Advantages.css';
import {Fade, Slide} from "react-awesome-reveal";

const Advantages = () => {

    const data = [
        {
            id:'advOne',
            text:'Регламентированные рабочие процессы',
            gradient:'linear-gradient(90deg, #F6D365 0%, #FDA085 100%)'
        },
        {
            id:'advTwo',
            text:'Собственное программное обеспечение',
            gradient:'linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%)'
        },
        {
            id:'advThree',
            text:'Сервисная модель взаимодействия',
            gradient:'linear-gradient(90deg, #FCCB90 0%, #D57EEB 100%)'
        },
        {
            id:'advFour',
            text:'Система дистанционной работы',
            gradient:'linear-gradient(90deg, #D4FC79 0%, #96E6A1 100%)'
        },
        {
            id:'advFive',
            text:'Профессиональная команда специалистов',
            gradient:'linear-gradient(90deg, #FF8177 0%, #FF867A 0%, #FF8C7F 21%, #F99185 52%, #CF556C 78%, #B12A5B 100%)'
        },
        {
            id:'advSix',
            text:'Поддержка и сопровождение',
            gradient:'linear-gradient(90deg, #F093FB 0%, #F5576C 100%)'
        },
    ];

    return (
        <div className={`Advantages container mt-5`}>
            <h3>Наши преимущества</h3>
            <div className="content">
                {
                    data.map(elem =>(
                        <div className={`advent-block`} key={elem.id}>
                            <Fade>
                            <div
                                // style={{background:elem.gradient}}
                                style={{background:"#669966"}}
                                className="line"
                            />
                                <Slide direction={'up'} delay={300}>
                                    <h5>{elem.text}</h5>
                                </Slide>
                            </Fade>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Advantages;