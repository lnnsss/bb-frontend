import React, {useState} from 'react';
import s from "./styles.module.css"
import {useNavigate} from 'react-router-dom';

const RestorePassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (email.trim().length) {
            alert(`Письмо для сброса пароля отправлено на почту: ${email}`)
            navigate("/login");
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
