import React from "react";
import s from "./styles.module.css"
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStores } from "../../stores/root-store-context.js";

const NotFound = observer(() => {
    const { token: { hasRole } } = useStores();

    const isAdmin = hasRole('ADMIN');

    return (
        <div className={s.notFound}>
            <div className={`__container ${s.notFound__container}`}>
                <img className={s.logo} src="/logo.png" alt="logo"/>
                <h2>Страница не найдена</h2>
                <p>Страница, которую вы ищете, не существует.</p>
                <Link className={s.notFound__link} to={isAdmin ? "/admin" : "/"}>
                    На главную
                </Link>
            </div>
        </div>
    )
})

export default NotFound;