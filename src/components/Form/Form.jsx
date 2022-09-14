import React, {useRef, useState} from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';
import Error from "../../general-components/Error/Error";
import AfterForm from "../AfterForm/AfterForm";
import './FormMedia.css';

const Form = () => {

    //checkbox
    const [disable,setDisable] = useState(true)

    //inputs
    const [name,setName] = useState('')
    const [tel,setTel] = useState('')
    const [email,setEmail] = useState('')

    //state for banner after form submit
    const [show,setShow] = useState(false)

    const [error,setError] = useState('')

    const form = useRef()

    const handleSend = e =>{
        e.preventDefault()
        console.log(form.current)
        emailjs.sendForm('service_7145o2v', 'template_1ymx0zc', form.current, 'LnCL280eI13ot4Had')
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