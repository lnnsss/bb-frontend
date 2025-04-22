import React from 'react';
import s from "../styles.module.css"
import axios from 'axios';
import { apiPlayersURL } from "../../../../../configs/constants";
import {useStores} from "../../../../../stores/root-store-context";
import { observer } from 'mobx-react-lite';

const Card = observer(({id, imageUrl, name, lastName, number, height, weight, position, birthday, country }) => {
    const {
        players: { players, setPlayers }
    } = useStores();

    // удаление игрока
    const handleDelete = async () => {
        try {
            await axios.delete(`${apiPlayersURL}/${id}`)
            setPlayers(players.filter(p => p.id !== id))
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={s.playerCard}>
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
                <button className={`${s.playerCard__btn} ${s.editBtn}`}>Редактировать</button>
                <button onClick={handleDelete} className={`${s.playerCard__btn} ${s.delBtn}`}>Удалить</button>
            </div>
        </div>
    );
});

export default Card;
