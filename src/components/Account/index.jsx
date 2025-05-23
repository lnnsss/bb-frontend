import React, { useEffect, useState } from 'react';
import s from "./styles.module.css";
import { useStores } from "../../stores/root-store-context.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUsersURL } from "../../configs/constants.js";
import { observer } from 'mobx-react-lite';
import MyTickets from "./components/MyTickets.jsx";

const Account = observer(() => {
    const {
        token: { clearToken, getID },
        account: { email, name, lastName, setEmail, setName, setLastName, clear },
        ticket: { setGames },
        modal: { openModal }
    } = useStores()

    const [editMode, setEditMode] = useState(false);
    const [newName, setNewName] = useState(name || '');
    const [newLastName, setNewLastName] = useState(lastName || '');
    const navigate = useNavigate();
    const id = getID();

    const handleEdit = () => {
        setNewName(name || '');
        setNewLastName(lastName || '');
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            const payload = {
                id,
                name: newName,
                lastName: newLastName,
                email
            };
            const response = await axios.put(`${apiUsersURL}/${id}`, payload);
            const updated = response.data.content;

            setName(updated.name);
            setLastName(updated.lastName);
            setEditMode(false);
            openModal("Информация изменена успешно!")
        } catch (err) {
            console.error('Ошибка при сохранении:', err);
        }
    };

    const handleLogOut = () => {
        clear();
        clearToken();
        navigate('/registration');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUsersURL}/${id}`)
                const { email, name, lastName, games } = response.data.content;
                setEmail(email);
                setName(name);
                setLastName(lastName);
                setGames(games);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
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
                            <button className={s.logOutButton} onClick={handleEdit}>Редактировать</button>
                            <button className={s.logOutButton} onClick={handleLogOut}>Выйти</button>
                        </div>
                    </div>
                </div>

                <MyTickets/>

                <div className={s.accountSection}>
                    <h3 className={s.sectionTitle}>Карточка болельщика</h3>
                    <p>в разработке</p>
                </div>

                {editMode && (
                    <div className={s.modalOverlay}>
                        <div className={s.modalContent}>
                            <h2>Редактировать профиль</h2>
                            <input
                                type="text"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                                placeholder="Имя"
                                className={s.inputField}
                            />
                            <input
                                type="text"
                                value={newLastName}
                                onChange={(e) => setNewLastName(e.target.value)}
                                placeholder="Фамилия"
                                className={s.inputField}
                            />
                            <div className={s.modalButtons}>
                                <button className={s.saveButton} onClick={handleSave}>Сохранить</button>
                                <button className={s.cancelButton} onClick={() => setEditMode(false)}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
});

export default Account;
