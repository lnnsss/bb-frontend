import React from 'react';
import s from "./styles.module.css";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../stores/root-store-context.js";

const User = observer(() => {
    const {
        user: { id, name, lastName, mail }
    } = useStores();

    const initials = `${name[0]}${lastName[0]}`;

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
                        <p className={s.userDetail}><span className={s.label}>Email:</span> <a href={`mailto:${mail}`} className={s.userMail}>{mail}</a></p>

                        <div className={s.actions}>
                            <button className={`${s.button} ${s.editButton}`}>Редактировать </button>
                            <button  className={`${s.button} ${s.deleteButton}`}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default User;