import React from 'react';
import s from "./styles.module.css"
import {Link, useNavigate} from "react-router-dom";
import FormGroup from "./components/FormGroup.jsx";
import axios from "axios";
import {apiAuthURL} from "../../configs/constants.js";
import Cookies from "js-cookie";
import {useStores} from "../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";

const Login = observer(() => {
    const navigate = useNavigate();
    const {
        login: { formData: { email, password }, clearForm },
        token: { setToken }
    } = useStores();

    // Вход
    const handleBtnClick = async (event) => {
        event.preventDefault();

        // Тело запроса
        const body = {
            email,
            password,
        };

        // Проверка на пустые поля
        if (!email.trim() || !password.trim()) {
            return alert("Все поля должны быть заполнены");
        }

        try {
            // Запрос на сервер
            const response = await axios.post(`${apiAuthURL}/login`, body);

            // Обработка успешного ответа
            if (response.data && response.data.content && response.data.content.token) {
                const receivedToken = response.data.content.token;

                // Сохранение токена
                alert(response.data.message || "Вход прошёл успешно!");
                setToken(receivedToken);
                Cookies.set('jwt', receivedToken, { secure: true, sameSite: 'Strict' });

                // Очистка полей формы
                clearForm();

                // Переход на следующую страницу
                const tokenPayload = JSON.parse(atob(receivedToken.split('.')[1]));
                if (Array.isArray(tokenPayload.roles) && tokenPayload.roles.includes('ADMIN')) {
                    navigate('/admin');
                } else {
                    navigate('/account');
                }
            } else {
                console.error("Unexpected response structure:", response.data);
                alert("Произошла ошибка при входе. Не удалось получить токен.");
            }

        } catch (error) {
            console.error("Ошибка входа:", error);
            if (error.response) {
                alert(`Ошибка входа: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                alert("Ошибка сети. Не удалось связаться с сервером.");
            } else {
                alert("Произошла ошибка при отправке данных.");
            }
        }
    };

    return (
        <div className={s.login}>
            <div className={`__container ${s.login__container}`}>
                <div className={s.login__form}>
                    <h2>Вход</h2>
                    <form>
                        <FormGroup name="email" text="Почта"/>
                        <FormGroup name="password" text="Пароль"/>

                        <button onClick={handleBtnClick} className={s.form__button}>Войти</button>
                    </form>

                    <div className={s.login__regLink}>
                        <div>
                            Забыли пароль? <Link to="/restorePassword">Восстановить</Link>
                        </div>
                        <div>
                            Еще нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Login;