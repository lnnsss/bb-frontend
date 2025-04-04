import React from 'react';
import s from "../styles.module.css";

const Card = ({imageUrl, title, price}) => {
    return (
        <div className={s.productCard}>
            <img
                src={imageUrl}
                alt={title}
                className={s.productCard__image}
            />
            <h3 className={s.productCard__title}>{title}</h3>
            <p className={s.productCard__price}>{price} ₽</p>

            <button className={s.buyButton}>Купить</button>
        </div>
    );
};

export default Card;