import React from 'react';
import s from "../styles.module.css";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className={s.header__logo}>
            <Link to="/">
                <img src="/logo.png" alt="logo"/>
            </Link>
        </div>
    );
};

export default Logo;