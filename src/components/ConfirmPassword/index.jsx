import React, {useState} from 'react';
import s from "./styles.module.css"
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {apiAuthURL} from "../../configs/constants.js";
import {useStores} from "../../stores/root-store-context.js";

const ConfirmPassword = () => {
    const {
        modal: { openModal }
    } = useStores();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (email.trim().length) {
            try {
                await axios.post(`${apiAuthURL}/password-reset/confirm`, { email, code, newPassword })

                openModal(`Пароль успешно изменен.`)
                navigate("/login")
            } catch (error) {
                if (error.response) {
                    openModal(`Ошибка: ${error.response.data.message || "Что-то пошло не так. Убедитесь, что ввели верный код."}`)
                } else {
                    openModal("Ошибка сети. Попробуйте ещё раз.")
                }
                console.error("Ошибка запроса:", error)
            }
        }
    }
    
    return (
        <div className={s.confirmPassword}>
            <div className={`__container ${s.confirmPassword__container}`}>
                <div className={s.confirmPassword__form}>
                    <h2>Восстановить пароль</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Введите email: </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="">Введите код: </label>
                        <input type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
                        <label htmlFor="">Введите новый пароль: </label>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                        <button type="submit" className={s.form__button}>Установить новый пароль</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPassword;
