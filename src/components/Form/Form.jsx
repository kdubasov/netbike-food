import React, {useRef, useState} from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';
import Error from "../../general-components/Error/Error";
import AfterForm from "../AfterForm/AfterForm";
import './FormMedia.css';
import Questionnaire from "./Questionnaire/Questionnaire";

const Form = () => {

    //checkbox
    const [disable,setDisable] = useState(true)

    //inputs
    const [name,setName] = useState('')
    const [tel,setTel] = useState('')
    const [email,setEmail] = useState('')

    const [dataAnk,setDataAnk] = useState(['','','','','',''])

    const [dataCheck,setDataCheck] = useState([
        false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false
    ])

    //state for banner after form submit
    const [show,setShow] = useState(false)

    const [error,setError] = useState('')

    const form = useRef()

    const handleSend = e =>{
        e.preventDefault()
        console.log(form.current)
        // emailjs.sendForm('service_an4uzvj', 'template_hn7f37u', form.current, 'VGVHoX_8lEFrXhizs')
        emailjs.sendForm('service_an4uzvj', 'template_yutmyuj', form.current, 'VGVHoX_8lEFrXhizs')
            .then(() => {
                setShow(true)
            }, (error) => {
                setError("Ошибка отправки формы, попробуйте позже");
                setTimeout(() => setError(false),5000)
            });
    }

    return (
        <>
            {
                show?
                    <AfterForm />
                    :
                    <form ref={form} onSubmit={handleSend} className={`Form container`}>

                        <h4>
                            Оставьте заявку на презентацию
                        </h4>
                        <h6>
                            С вами свяжется проект-менеджер для консультации
                            и согласования времени проведения встречи
                        </h6>

                        <div className="content">

                            <div className="block">
                                <h6>Ваше имя<strong>*</strong></h6>
                                <input
                                    name={"name"}
                                    type="text"
                                    value={name}
                                    onChange={event => setName(event.target.value)}
                                    required={true}
                                />
                            </div>

                            <div className="block">
                                <h6>Номер телефона<strong>*</strong></h6>
                                <input
                                    name={"tel"}
                                    type="tel"
                                    value={tel}
                                    onChange={event => setTel(event.target.value)}
                                    required={true}
                                />
                            </div>

                            <div className="block">
                                <h6>E-mail<strong>*</strong></h6>
                                <input
                                    name={"email"}
                                    type="email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    required={true}
                                />
                            </div>

                            <p className={'mt-3 mb-3'}>
                                Вы можете заполнить анкету и ответить на часть вопросов
                                – это поможет подготовить индивидуальную презентацию для встречи
                            </p>

                            <Questionnaire
                                dataAnk={dataAnk}
                                setDataAnk={setDataAnk}
                                dataCheck={dataCheck}
                                setDataCheck={setDataCheck}
                            />

                            <button type={"submit"} disabled={disable}>Отравить</button>

                            {error? <Error error={error} />:''}

                            <div className="block check">
                                <input
                                    type="checkbox"
                                    checked={!disable}
                                    onChange={() => setDisable(!disable)}
                                />
                                <h6>Соглашаюсь с политикой конфиденциальности и пользовательским соглашением</h6>
                            </div>

                        </div>
                    </form>
            }
        </>
    );
};

export default Form;