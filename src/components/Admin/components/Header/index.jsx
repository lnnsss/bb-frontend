import React from 'react';
import s from "./styles.module.css"
import { observer } from "mobx-react-lite";
import Logo from "./components/Logo.jsx";
import Burger from "./components/Burger.jsx";
import Nav from "./components/Nav.jsx";

const AdminHeader = observer(() => {

    return (
        <header className={s.header}>
            <div className={`__container ${s.header__container}`}>
                <Logo/>
                <Burger/>
                <Nav/>
            </div>
        </header>
    );
});

export default AdminHeader;