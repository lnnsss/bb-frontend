import React from 'react';
import s from "../styles.module.css"
import ModeBtn from "./ModeBtn.jsx";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    return (
        <header className={s.header}>
            <h1 className={s.deleted__title}>Восстановить</h1>
            <div className={s.btns}>
                <ModeBtn name="player" title="Игрока" />
                <ModeBtn name="news" title="Новость" />
            </div>
        </header>
    );
});

export default Header;