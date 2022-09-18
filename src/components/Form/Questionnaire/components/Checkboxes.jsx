import React from 'react';
import './Checkboxes.css';

const Checkboxes = ({dataCheck,setDataCheck}) => {

    const handleChangeCheck = (id) =>{
        let newArr = Object.assign([],dataCheck)
        newArr[id] = !newArr[id]
        setDataCheck(newArr)
    }


    const handleGetBlockCheck = (text,id) =>{
        return(
            <div className="block-check">
                <input
                    name={`check${id}`}
                    type="checkbox"
                    value={dataCheck[id]}
                    onChange={() => handleChangeCheck(id)}
                />
                <p>{text}</p>
            </div>
        )
    }

    return (
        <div className="container-checks">
            <h6 className={'zag-main mt-2 mb-4'}>Выберите опции и функционал для своего интернет-решения</h6>
            <div className="block-checks">
                <h6>Отраслевые опции</h6>
                {handleGetBlockCheck('Интернет-эквайринг',0)}
                {handleGetBlockCheck('Точки выдачи',1)}
                {handleGetBlockCheck('Геолокация',2)}
                {handleGetBlockCheck('Фильтр по параметрам',3)}
                {handleGetBlockCheck('Промокоды',4)}
                {handleGetBlockCheck('Интеграция со сторонней системой',5)}
                {handleGetBlockCheck('Мобильное приложение',6)}
            </div>
            <div className="block-checks">
                <h6>Компоненты</h6>
                {handleGetBlockCheck('Блог',7)}
                {handleGetBlockCheck('Акции и спец.предложения',8)}
                {handleGetBlockCheck('Рейтинги и отзывы',9)}
                {handleGetBlockCheck('Вакансии',10)}
                {handleGetBlockCheck('Команда',11)}
                {handleGetBlockCheck('Личный кабинет',12)}
                {handleGetBlockCheck('Мобильное приложение',13)}
            </div>
            <div className="block-checks">
                <h6>Дополнительно</h6>
                {handleGetBlockCheck('Анимация элементов интерфейса',14)}
                {handleGetBlockCheck('Фоновое видео',15)}
                {handleGetBlockCheck('Квиз',16)}
                {handleGetBlockCheck('SMS – уведомления',17)}
                {handleGetBlockCheck('Настройка рекламной кампании',18)}
            </div>
        </div>
    );
};

export default Checkboxes;