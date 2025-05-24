import React, { useEffect, useState } from 'react';
import s from "./styles.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../stores/root-store-context.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiUsersURL } from "../../../../configs/constants.js";

const User = observer(() => {
    const {
        user: { id, name, lastName, email, setId, setName, setLastName, setEmail }
    } = useStores();

    const navigate = useNavigate();
    const params = useParams();
    const userId = params.id;

    const initials = `${name?.[0] || ''}${lastName?.[0] || ''}`;

    const [editMode, setEditMode] = useState(false);
    const [newName, setNewName] = useState('');
    const [newLastName, setNewLastName] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiUsersURL}/${userId}`);
                const { name, lastName, email } = response.data.content;

                setId(userId);
                setName(name);
                setLastName(lastName);
                setEmail(email);

                setNewName(name);
                setNewLastName(lastName);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, [userId]);

    const handleEditClick = () => {
        setNewName(name);
        setNewLastName(lastName);
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
        } catch (err) {
            console.error('Ошибка при сохранении:', err);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${apiUsersURL}/${userId}`);
            setId("");
            setName("");
            setLastName("");
            setEmail("");
            navigate("/admin/users");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={s.user}>
            <div className={`__container ${s.user__container}`}>
                <h2 className={s.pageTitle}>Информация о пользователе</h2>
                <div className={s.contentWrapper}>
                    <div className={s.avatar}>
                        <span className={s.initials}>{initials || '?'}</span>
                    </div>
                    <div className={s.userInfo}>
                        {!editMode ? (
                            <>
                                <h3 className={s.userName}>{name} {lastName}</h3>
                                <p className={s.userDetail}><span className={s.label}>ID:</span> {id}</p>
                                <p className={s.userDetail}><span className={s.label}>Email:</span> <a href={`mailto:${email}`} className={s.userMail}>{email}</a></p>
                                <div className={s.actions}>
                                    <button onClick={handleEditClick} className={`${s.button} ${s.editButton}`}>Редактировать</button>
                                    <button onClick={handleDelete} className={`${s.button} ${s.deleteButton}`}>Удалить</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className={s.inputField}
                                    placeholder="Имя"
                                />
                                <input
                                    type="text"
                                    value={newLastName}
                                    onChange={(e) => setNewLastName(e.target.value)}
                                    className={s.inputField}
                                    placeholder="Фамилия"
                                />
                                <div className={s.actions}>
                                    <button onClick={handleSave} className={`${s.button} ${s.editButton}`}>Сохранить</button>
                                    <button onClick={() => setEditMode(false)} className={`${s.button} ${s.deleteButton}`}>Отмена</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default User;
