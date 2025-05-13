import React from 'react';
import s from "./styles.module.css"
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import FormGroup from "./components/FormGroup.jsx";
import {useStores} from "../../stores/root-store-context.js";
import {apiAuthURL} from "../../configs/constants.js";
import {observer} from "mobx-react-lite";

const Registration = observer(() => {
    const navigate = useNavigate();
    const {
        registration: { formData: {name, lastName, email, password, confirmPassword}, clearForm },
        token: { setToken },
        modal: { openModal }
    } = useStores()

    // Регистрация
    const handleBtnClick = async (event) => {
        event.preventDefault();

        // Тело запроса
        const body = {
            name: (name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()).trim(),
            lastName: (lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1).toLowerCase()).trim(),
            email: email.trim(),
            password: password.trim()
        };

        // Проверка на пустые поля
        if (!name.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            return openModal("Все поля должны быть заполнены");
        }

        // Проверка на совпадение паролей
        if (password !== confirmPassword) {
            return openModal("Пароли не совпадают");
        }

        try {
            // Запрос на сервер
            const response = await axios.post(`${apiAuthURL}/registration`, body);

            // Обработка успешного ответа
            if (response.data && response.data.content && response.data.content.token) {
                const receivedToken = response.data.content.token;

                // Сохранение токена
                openModal(response.data.message || "Регистрация прошла успешно!");
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
                openModal("Произошла ошибка при регистрации. Не удалось получить токен.");
            }

        } catch (error) {
            console.error("Ошибка регистрации:", error);
            if (error.response) {
                openModal(`Ошибка регистрации: ${error.response.data.message || error.response.statusText}`);
            } else if (error.request) {
                openModal("Ошибка сети. Не удалось связаться с сервером.");
            } else {
                openModal("Произошла ошибка при отправке данных.");
            }
        }
    };

    return (
        <div className={s.registration}>
            <div className={`__container ${s.registration__container}`}>
                <div className={s.registration__form}>
                    <h2>Регистрация</h2>
                    <form>
                        <FormGroup name="name" text="Имя"/>
                        <FormGroup name="lastName" text="Фамилия"/>
                        <FormGroup name="email" text="Почта"/>
                        <FormGroup type="password" name="password" text="Пароль"/>
                        <FormGroup type="password" name="confirmPassword" text="Повторите пароль"/>

                        <button onClick={handleBtnClick} className={s.form__button}>Зарегистрироваться</button>
                    </form>

                    <div className={s.registration__loginLink}>
                        <div>
                            Забыли пароль? <Link to="/restorePassword">Восстановить</Link>
                        </div>
                        <div>
                            Уже есть аккаунт? <Link to="/login">Войти</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Registration;
