import React from 'react';
import s from "../styles.module.css";
import { observer } from "mobx-react-lite";
import {useStores} from "../../../stores/root-store-context.js";

const Burger = observer(() => {
    const {
        header: { isMenuOpen, toggleMenu }
    } = useStores()

    return (
        <button className={`${s.header__burger} ${isMenuOpen ? s.open : ''}`} onClick={toggleMenu}>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
            <span className={s.burger__line}></span>
        </button>
    );
});

export default Burger;