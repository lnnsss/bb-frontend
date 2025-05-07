import React, {useState} from 'react';
import s from "./styles.module.css"
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {apiAuthURL} from "../../configs/constants.js";

const RestorePassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (email.trim().length) {
            try {
                await axios.post(`${apiAuthURL}/password-reset/request`, { email })

                alert(`Письмо для сброса пароля отправлено на почту: ${email}`)
                navigate("/login")
            } catch (error) {
                if (error.response) {
                    alert(`Ошибка: ${error.response.data.message || "Не удалось отправить письмо."}`)
                } else {
                    alert("Ошибка сети. Попробуйте ещё раз.")
                }
                console.error("Ошибка запроса:", error)
            }
        }
    }
    
    return (
        <div className={s.restorePassword}>
            <div className={`__container ${s.restorePassword__container}`}>
                <div className={s.restorePassword__form}>
                    <h2>Восстановить пароль</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Введите email: </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit" className={s.form__button}>Восстановить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RestorePassword;
