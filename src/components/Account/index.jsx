import React, {useEffect} from 'react';
import s from "./styles.module.css";
import {useStores} from "../../stores/root-store-context.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {apiUsersURL} from "../../configs/constants.js";

const Account = () => {
    const {
        token: { clearToken, getID },
        account: { email, name, lastName, setEmail, setName, setLastName, clear }
    } = useStores()
    const navigate = useNavigate();
    const id = getID();

    // Выход из аккаунта
    const handleLogOut = () => {
        clear()
        clearToken()
        navigate('/registration');
    }

    // Запрос
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUsersURL}/${id}`)
                const { email, name, lastName } = response.data.content;
                setEmail(email);
                setName(name);
                setLastName(lastName);

            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [id]);

    return (
        <div className={s.account}>
            <div className={`__container ${s.account__container}`}>

                <h1 className={s.accountTitle}>Личный кабинет</h1>

                <div className={s.userInfoCard}>
                    <div className={s.avatarPlaceholder}>
                        {name?.charAt(0)}{lastName?.charAt(0)}
                    </div>
                    <div className={s.userDetails}>
                        <h2 className={s.userName}>{name} {lastName}</h2>
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