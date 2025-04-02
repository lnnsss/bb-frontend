import React from 'react';
import { Link } from 'react-router-dom';
import s from "../styles.module.css";

const User = ({ id, name, lastName, mail }) => {
    return (
        <Link
            to={`/admin/users/${id}`}
            className={s.userBlock}
        >
            <div className={s.userInfo}>
                <span className={s.userName}>{name} {lastName}</span>
                <span className={s.userMail}>{mail}</span>
            </div>
        </Link>
    );
};

export default User;