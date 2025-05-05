import React from 'react';
import s from "../styles.module.css";
import { observer } from "mobx-react-lite";
import HeaderLink from "./HeaderLink.jsx";
import {useStores} from "../../../../../stores/root-store-context.js";
import {useNavigate} from "react-router-dom";

const Nav = observer(() => {
    const {
        token: { clearToken },
        header: { isMenuOpen },
    } = useStores()
    const navigate = useNavigate();

    const handleLogOut = () => {
        clearToken()
        navigate('/registration');
    }

    return (
        <div className={`${s.header__links} ${isMenuOpen ? s.open : ''}`}>
            <nav className={s.header__nav}>
                <ul className={s.header__nav_list}>
                    <HeaderLink path="">Главная</HeaderLink>
                    <HeaderLink path="users">Пользователи</HeaderLink>
                    <HeaderLink path="players">Игроки</HeaderLink>
                    <HeaderLink path="games">Игры</HeaderLink>
                    <HeaderLink path="news">Новости</HeaderLink>
                    <li><button className={s.logOut} onClick={handleLogOut}>Выйти</button></li>
                </ul>
            </nav>
        </div>
    );
});

export default Nav;