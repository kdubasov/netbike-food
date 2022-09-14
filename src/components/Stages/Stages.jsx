import React from 'react';
import './Stages.css';
import './StagesMedia.css';

const Stages = () => {

    const data = [
        {
            id:'stOne',
            zagolovok:'Подготовительный',
            ul:[
                'Актуализация данных анкеты',
                'Консультационная помощь при сборе первичных данных',
                'Подготовка первичных данных для проектировочного этапа'
            ],
            img:'/images/Stages/1.svg',
        },
        {
            id:'stTwo',
            zagolovok:'Проектировочный',
            ul:[
                'Создание контент-проекта и согласование с клиентом ',
                'Создание дизайн-кода публичной части интернет-ресурса и согласование с клиентом',
                'Создание программного прототипа – основа для создания графического прототипа)',
                'Создание графического прототипа и согласование с клиентом'
            ],
            img:'/images/Stages/2.svg',
        },
        {
            id:'stThree',
            zagolovok:'Производственный',
            ul: [
                'Вёрстка и программирование на основе графического прототипа',
                'Запуск, тестирование, корректировки предстартовой версии',
                'Первый этап оптимизации для поисковых систем ',
                'Ввод в эксплуатацию, подключение основного домена',
                'Второй этап оптимизации для поисковых систем'
            ],
            img:'/images/Stages/3.svg',
        },
    ];

    return (
        <div className={`Stages container`}>
            <h3>Этапы создания</h3>
            <div className="content">
                {
                    data.map(elem =>(
                        <div
                            key={elem.id}
                            className={`stages-block`}
                            style={{backgroundImage:`url(${elem.img})`}}
                        >
                            <h4>{elem.zagolovok}</h4>
                            <ul>
                                {
                                    elem.ul.map(elem =>(
                                        <li key={elem}>{elem}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Stages;