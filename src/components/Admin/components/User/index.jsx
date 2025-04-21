import React, {useEffect} from 'react';
import s from "./styles.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../stores/root-store-context.js";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {apiUsersURL} from "../../../../configs/constants.js";

const User = observer(() => {
    const {
        user: { id, name, lastName, email, setId, setName, setLastName, setEmail }
    } = useStores();
    const navigate = useNavigate();

    // id пользователя
    const params = useParams();
    const userId = params.id;

    // инициалы имени, фамилии
    const initials = `${name[0]}${lastName[0]}`;

    // запрос
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiUsersURL}/${userId}`);

                const {name, lastName, email} = response.data.content;

                setId(userId);
                setName(name);
                setLastName(lastName);
                setEmail(email);

            } catch (err) {
                console.error(err)
            }
        }
        fetchUser()
    }, []);

    // удаление пользователя
    const handleDelete = async () => {
        try {
            await axios.delete(`${apiUsersURL}/${userId}`)

            setId("");
            setName("");
            setLastName("");
            setEmail("");
            navigate("/admin/users")

        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={s.user}>
            <div className={`__container ${s.user__container}`}>
                <h2 className={s.pageTitle}>Информация о пользователе</h2>
                <div className={s.contentWrapper}>
                    <div className={s.avatar}>
                        <span className={s.initials}>{initials || '?'}</span>
                    </div>

                    <div className={s.userInfo}>
                        <h3 className={s.userName}>{name} {lastName}</h3>
                        <p className={s.userDetail}><span className={s.label}>ID:</span> {id}</p>
                        <p className={s.userDetail}><span className={s.label}>Email:</span> <a href={`mailto:${email}`} className={s.userMail}>{email}</a></p>

                        <div className={s.actions}>
                            <button className={`${s.button} ${s.editButton}`}>Редактировать </button>
                            <button onClick={handleDelete} className={`${s.button} ${s.deleteButton}`}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default User;
