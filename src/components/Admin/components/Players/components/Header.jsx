import React from 'react';
import s from "../styles.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <h2 className={s.players__title}>Игроки</h2>
            <div className={s.btns}>
                <Link to="/admin/add" className={s.addPlayer}>Добавить игрока</Link>
                <Link to="/admin/deleted" className={s.addPlayer}>Удалённые</Link>
            </div>
        </header>
    );
};

export default Header;