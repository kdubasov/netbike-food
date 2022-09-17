import React, {useState} from 'react';
import './Questionnaire.css';

const Questionnaire = ({dataAnk,setDataAnk}) => {

    const [ankShow,setAnkShow] = useState(false)

    const handleChangeInp = (value,id) =>{
        const arr = Object.assign([],dataAnk)
        arr[id] = value
        setDataAnk(arr)
    }

    return (
        <div className={`Questionnaire`}>
            <button type="button" onClick={() =>setAnkShow(!ankShow)} className={'open-close'}>
                Анкета
                <img style={ankShow?{rotate:"180deg"}:{}} src="/images/ArrowBlack.svg" alt="arrow"/>
            </button>

            <div hidden={!ankShow} className="anketa pt-3">
                <div className="block">
                    <h6>Сфера деятельности</h6>
                    <p className="small">расскажите кратко чем вы занимаетесь</p>
                    <input
                        name={"sferaDeyateln"}
                        type="text"
                        value={dataAnk[0]}
                        onChange={event => handleChangeInp(event.target.value,0)}
                    />
                </div>

                <div className="block">
                    <h6>ИНН</h6>
                    <p className="small">укажите ИНН организации или ИП/Самозанятый</p>
                    <input
                        name={"Inn"}
                        type="text"
                        value={dataAnk[1]}
                        onChange={event => handleChangeInp(event.target.value,1)}
                    />
                </div>

                <div className="block">
                    <h6>Фирменный стиль</h6>
                    <p className="small">у вас есть логотип и фирменный стиль?</p>
                    <input
                        name={"firmStyle"}
                        type="text"
                        value={dataAnk[2]}
                        onChange={event => handleChangeInp(event.target.value,2)}
                    />
                    {/*<select */}
                    {/*    name="firmStyle"*/}
                    {/*    onChange={event => handleChangeInp(event.target.value,2)}*/}
                    {/*    value={dataAnk[2]}*/}
                    {/*>*/}
                    {/*    <option value="1">1</option>*/}
                    {/*    <option value="2">2</option>*/}
                    {/*    <option value="2">2</option>*/}
                    {/*</select>*/}
                </div>

                <div className="block">
                    <h6>Интересные сайты</h6>
                    <p className="small">напишите адреса сайтов (через запятую), которые вам понравились</p>
                    <input
                        name={"interestSites"}
                        type="text"
                        value={dataAnk[3]}
                        onChange={event => handleChangeInp(event.target.value,3)}
                    />
                </div>

                <div className="block">
                    <h6>Ваши сайты и социальные сети</h6>
                    <p className="small">напишите адреса ресурсов (через запятую), при наличии</p>
                    <input
                        name={"yourSites"}
                        type="text"
                        value={dataAnk[4]}
                        onChange={event => handleChangeInp(event.target.value,4)}
                    />
                </div>

                <div className="block">
                    <h6>Комментарий</h6>
                    <p className="small">расскажите о своем проекте и сфере вашей деятельности</p>
                    <textarea
                        rows={5}
                        name={"aboutProject"}
                        value={dataAnk[5]}
                        onChange={event => handleChangeInp(event.target.value,5)}
                    />
                </div>
            </div>

        </div>
    );
};

export default Questionnaire;