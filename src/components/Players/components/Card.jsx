import React from 'react';
import s from "../styles.module.css"
import {Link} from "react-router-dom";

const Card = ({id, imageUrl, name, lastName, number, height, weight, position, birthday, country }) => {
    return (
        <Link to={`/players/${id}`} className={s.playerCard}>
            <div className={s.playerCard__imageWrapper}>
                <img
                    src={imageUrl}
                    alt={`Фото ${name} ${lastName}`}
                    className={s.playerCard__image}
                    loading="lazy"
                />
            </div>
            <div className={s.playerCard__info}>
                <h3 className={s.playerCard__name}>
                    <span className={s.playerCard__number}>{number}</span>
                    {`${name} ${lastName}`}
                </h3>
                <p className={s.playerCard__detail}>
                    <span className={s.playerCard__label}>Позиция:</span> {position}
                </p>
                <p className={s.playerCard__detail}>
                    <span className={s.playerCard__label}>Рост:</span> {height} см
                </p>
                <p className={s.playerCard__detail}>
                    <span className={s.playerCard__label}>Вес:</span> {weight} кг
                </p>
                <p className={s.playerCard__detail}>
                    <span className={s.playerCard__label}>Дата рождения:</span> {birthday}
                </p>
                <p className={s.playerCard__detail}>
                    <span className={s.playerCard__label}>Страна:</span> {country}
                </p>
            </div>
        </Link>
    );
};

export default Card;