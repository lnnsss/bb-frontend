import React, { useState } from 'react';
import s from "./styles.module.css";
import {useStores} from "../../stores/root-store-context.js";

const Support = () => {
    const {
        modal: { openModal }
    } = useStores();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        openModal("Сообщение отправлено!");
        setMessage("");
        setEmail("");
    };

    return (
        <div className={s.support}>
            <div className={`__container ${s.support__container}`}>
                <h2 className={s.support__title}>Поддержка</h2>
                <p className={s.support__text}>Если у вас есть вопросы или проблемы, пожалуйста, напишите нам.</p>

                <form className={s.support__form} onSubmit={handleSubmit}>
                    <div className={s.support__formGroup}>
                        <label htmlFor="email" className={s.support__label}>Ваш Email</label>
                        <input
                            type="email"
                            id="email"
                            className={s.support__input}
                            placeholder="Введите ваш email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={s.support__formGroup}>
                        <label htmlFor="message" className={s.support__label}>Сообщение</label>
                        <textarea
                            id="message"
                            className={s.support__textarea}
                            placeholder="Опишите вашу проблему или вопрос"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className={s.support__button}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Support;
