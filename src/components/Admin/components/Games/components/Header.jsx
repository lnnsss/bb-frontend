import React from 'react';
import s from "../styles.module.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <h1 className={s.games__title}>Игры</h1>
            <Link to="/admin/add" className={s.addGame}>Добавить игру</Link>
        </header>
    );
};

export default Header;