// Header.jsx
import React from 'react';
import s from "../styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <h2 className={s.news__title}>Новости</h2>
            <Link to="/admin/add" className={s.addNews}>
                Добавить новость
            </Link>
        </header>
    );
};

export default Header;