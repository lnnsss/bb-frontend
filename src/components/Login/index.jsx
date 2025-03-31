import React from 'react';
import s from "./styles.module.css"
import {Link} from "react-router-dom";
import FormGroup from "./components/FormGroup.jsx";

const Login = () => {
    return (
        <div className={s.login}>
            <div className={`__container ${s.login__container}`}>
                <div className={s.login__form}>
                    <h2>Вход</h2>
                    <form>
                        <FormGroup name="email" text="Почта"/>
                        <FormGroup name="password" text="Пароль"/>

                        <button type="submit" className={s.form__button}>Войти</button>
                    </form>

                    <div className={s.login__regLink}>
                        Еще нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;