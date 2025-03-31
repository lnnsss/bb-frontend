import React from 'react';
import s from "../styles.module.css";
import { observer } from "mobx-react-lite";
import HeaderLink from "./HeaderLink.jsx";
import {useStores} from "../../../stores/root-store-context.js";

const Nav = observer(() => {
    const {
        token: { token },
        header: { isMenuOpen },
    } = useStores()

    return (
        <div className={`${s.header__links} ${isMenuOpen ? s.open : ''}`}>
            <nav className={s.header__nav}>
                <ul className={s.header__nav_list}>
                    <HeaderLink path="players">Состав</HeaderLink>
                    <HeaderLink path="games">Игры</HeaderLink>
                    {token
                        ? (<HeaderLink path="account">Аккаунт</HeaderLink>)
                        : (<>
                            <HeaderLink path="registration">Регистрация</HeaderLink>
                            <HeaderLink path="login">Вход</HeaderLink>
                        </>)
                    }
                </ul>
            </nav>
        </div>
    );
});

export default Nav;