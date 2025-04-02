import React from 'react';
import s from "./styles.module.css";
import {useStores} from "../../stores/root-store-context.js";
import {useNavigate} from "react-router-dom";

const currentUser = {
    firstName: "Иван",
    lastName: "Петров",
    email: "ivan.petrov@example.com"
};

const Account = () => {
    const { firstName, lastName, email } = currentUser;
    const {
        token: { clearToken },
    } = useStores()
    const navigate = useNavigate();

    const handleLogOut = () => {
        clearToken()
        navigate('/registration');
    }

    return (
        <div className={s.account}>
            <div className={`__container ${s.account__container}`}>

                <h1 className={s.accountTitle}>Личный кабинет</h1>

                <div className={s.userInfoCard}>
                    <div className={s.avatarPlaceholder}>
                        {firstName?.charAt(0)}{lastName?.charAt(0)}
                    </div>
                    <div className={s.userDetails}>
                        <h2 className={s.userName}>{firstName} {lastName}</h2>
                        <p className={s.userEmail}>{email}</p>
                        <div className={s.btns}>
                            <button className={s.editButton}>Редактировать профиль</button>
                            <button className={s.logOutButton} onClick={handleLogOut}>Выйти</button>
                        </div>
                    </div>
                </div>

                <div className={s.accountSection}>
                    <h3 className={s.sectionTitle}>Карточка болельщика</h3>
                    <p>в разработке</p>
                </div>

                <div className={s.accountSection}>
                    <h3 className={s.sectionTitle}>Посещенные матчи</h3>
                    <p>в разработке</p>
                </div>

            </div>
        </div>
    );
};

export default Account;