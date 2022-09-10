import React, {useState} from 'react';
import './Calculator.css';

const Calculator = () => {

    const [checks,setChecks] = useState(
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    )

    const [lastPrice,setLastPrice] = useState(0)

    //for checkboxes
    const handleCheck = id =>{
        let sum = 0;
        let arrPrices = [1250,3940,5650,8900,12200,1530,11600,9100,5400,3200,3700,6650,9850,1240,1910,1300];
        let arr = Object.assign([], checks)
        // console.log(arr)
        arr[id] = !arr[id]

        for(let elem in arr){
            if (arr[elem]){
                sum += arrPrices[elem]
            }
        }

        setChecks(arr)
        setLastPrice(sum)
    }

    //for show slider
    const [show,setShow] = useState(false)

    return (
        <div className={`Calculator container`}>
            <h2>Стоимость</h2>

            <div className="calc-slide-block">
                <div className="calculator-block">
                    <div className="content">
                        <header>
                            <h5>Отраслевое решение</h5>
                            <p>Комплектация</p>
                        </header>

                        {/*спаны без инпутов*/}
                        <div className="top-cont">
                            <div className="left">
                                <p>Главная страница</p>
                                <p>Деловой профиль</p>
                                <p>Презентация деятельности</p>
                            </div>
                            <div className="right">
                                <p>Включено</p>
                                <p>Включено</p>
                                <p>Включено</p>
                            </div>
                        </div>

                        <header>
                            <h5>Добавить</h5>
                            <p>Компоненты</p>
                        </header>

                        {/*add 1*/}
                        <div className="add">
                            <div className="left">
                                <span>
                                    <input type="checkbox" checked={checks[0]} onChange={() => handleCheck(0)}/>
                                    <p>Блог</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[1]} onChange={() => handleCheck(1)}/>
                                    <p>Акции и спец.предложения</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[2]} onChange={() => handleCheck(2)}/>
                                    <p>Рейтинги и отзывы</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[3]} onChange={() => handleCheck(3)}/>
                                    <p>Вакансии</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[4]} onChange={() => handleCheck(4)}/>
                                    <p>Команда</p>
                                </span>
                            </div>
                            <div className="right">
                                <p className={checks[0]?"":"none"}>Включено</p>
                                <p className={checks[1]?"":"none"}>Включено</p>
                                <p className={checks[2]?"":"none"}>Включено</p>
                                <p className={checks[3]?"":"none"}>Включено</p>
                                <p className={checks[4]?"":"none"}>Включено</p>
                            </div>
                        </div>

                        <header>
                            <h5>Добавить</h5>
                            <p>Отраслевые опции</p>
                        </header>

                        {/*add 2*/}
                        <div className="add">
                            <div className="left">
                                <span>
                                    <input type="checkbox" checked={checks[5]} onChange={() => handleCheck(5)}/>
                                    <p>Оплата онлайн</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[6]} onChange={() => handleCheck(6)}/>
                                    <p>Точки выдачи</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[7]} onChange={() => handleCheck(7)}/>
                                    <p>Сеть с несколькими городами</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[8]} onChange={() => handleCheck(8)}/>
                                    <p>Параметры товара с фильтром</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[9]} onChange={() => handleCheck(9)}/>
                                    <p>Счетчик калорий и БЖУ</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[10]} onChange={() => handleCheck(10)}/>
                                    <p>Умный поиск</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[11]} onChange={() => handleCheck(11)}/>
                                    <p>Промокоды</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[12]} onChange={() => handleCheck(12)}/>
                                    <p>Интеграция со сторонней системой</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[13]} onChange={() => handleCheck(13)}/>
                                    <p>Мобильное приложение (Android, IOS)</p>
                                </span>
                            </div>
                            <div className="right">
                                <p className={checks[5]?"":"none"}>Включено</p>
                                <p className={checks[6]?"":"none"}>Включено</p>
                                <p className={checks[7]?"":"none"}>Включено</p>
                                <p className={checks[8]?"":"none"}>Включено</p>
                                <p className={checks[9]?"":"none"}>Включено</p>
                                <p className={checks[10]?"":"none"}>Включено</p>
                                <p className={checks[11]?"":"none"}>Включено</p>
                                <p className={checks[12]?"":"none"}>Включено</p>
                                <p className={checks[13]?"":"none"}>Включено</p>
                            </div>
                        </div>

                        <header>
                            <h5>Улучшить</h5>
                            <p>Выбор услуг по айдентике</p>
                        </header>

                        {/*add 3*/}
                        <div className="add">
                            <div className="left">
                                <span>
                                    <input type="checkbox" checked={checks[14]} onChange={() => handleCheck(14)}/>
                                    <p>Логотип и фирменный стиль</p>
                                </span>
                                <span>
                                    <input type="checkbox" checked={checks[15]} onChange={() => handleCheck(15)}/>
                                    <p>Фирменный паттерн</p>
                                </span>
                            </div>
                            <div className="right">
                                <p className={checks[14]?"":"none"}>Включено</p>
                                <p className={checks[15]?"":"none"}>Включено</p>
                            </div>
                        </div>

                        {/*banner*/}
                        <div className="banner">
                            <p className="small">Сайт для бизнеса</p>
                            <h3>ONE MILLION</h3>
                            <h4><strong>NETBIKE</strong>COINS</h4>
                        </div>

                        <hr/>

                        <header>
                            <h5>Итого</h5>
                            <p>Курс 1NBC = 32,5RUB</p>
                            <p>Скидка: оптимальная</p>
                        </header>

                        <h3 className={'last-price'}>
                            {lastPrice} ₽
                        </h3>

                        <p className={'small last'}>
                            Ценовое предложение не является офертой, окончательная стоимость
                            составляется на основе бизнес-требований
                        </p>

                    </div>
                </div>

                <div className="calc-slider">
                    <div className={`content ${show?"show":''}`}>
                        {
                            show?
                                <>
                                    <h3>Создай свою историю вместе с нами</h3>
                                    <h5>B2B-сервис по созданию и поддержке интернет-решений</h5>
                                </>:""
                        }
                    </div>
                    <div className="show" onClick={() => setShow(!show)}>
                        <img className={show?"rotate":''} src="/images/Arrow.svg" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Calculator;