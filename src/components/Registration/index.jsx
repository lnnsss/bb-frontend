import React from 'react';
import s from "./styles.module.css"
import { Link } from 'react-router-dom';
import FormGroup from "./components/FormGroup.jsx";

const Registration = () => {

    return (
        <div className={s.registration}>
            <div className={`__container ${s.registration__container}`}>
                <div className={s.registration__form}>
                    <h2>Регистрация</h2>
                    <form>
                        <FormGroup name="firstName" text="Имя"/>
                        <FormGroup name="lastName" text="Фамилия"/>
                        <FormGroup name="email" text="Почта"/>
                        <FormGroup name="password" text="Пароль"/>
                        <FormGroup name="confirmPassword" text="Повторите пароль"/>

                        <button type="submit" className={s.form__button}>Зарегистрироваться</button>
                    </form>

                    <div className={s.registration__loginLink}>
                        Уже есть аккаунт? <Link to="/login">Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;