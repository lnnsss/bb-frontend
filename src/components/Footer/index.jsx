import React from 'react';
import s from "./styles.module.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`__container ${s.footer__container}`}>
                <div className={s.footer__info}>
                    <p>Contact us:</p>
                    <p>Email: <a href="mailto:info@example.com">aptbacketball@gmail.com</a></p>
                    <p>Phone: <a href="tel:+15551234567">+7 (937) 778-7602</a></p>
                    <p>Telegram: <a href="https://t.me/aptdubl" target="_blank">@aptdubl</a></p>
                </div>
                <div className={s.footer__copyright}>
                    <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
                    <p>
                        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
                    </p>
                    <p>
                        <Link to="/support">Обратная связь</Link>
                        <span> | </span>
                        <Link to="/support">Поддержка</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;