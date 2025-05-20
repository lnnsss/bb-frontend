import React from 'react';
import s from "../styles.module.css"
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import {useStores} from "../../../stores/root-store-context.js";
import {apiPlayersURL} from "../../../configs/constants.js";

const PlayerCard = observer(({ imageUrl, name, lastName, number, height, weight, position, birthday, country }) => {
    const {
        players: { players, setPlayers, deletedPlayers, setDeletedPlayers }
    } = useStores();

    const handleSubmit = async () => {
        const playerData = {
            name,
            lastName,
            number,
            position,
            birthday,
            country,
            height,
            weight,
            imageUrl
        };

        try {
            await axios.post(apiPlayersURL, playerData);

            setPlayers([...players, playerData]);

            const filtered = deletedPlayers.filter(p =>
                !(
                    p.name === name &&
                    p.lastName === lastName &&
                    p.number === number &&
                    p.position === position &&
                    p.birthday === birthday &&
                    p.country === country &&
                    p.height === height &&
                    p.weight === weight &&
                    p.imageUrl === imageUrl
                )
            );

            setDeletedPlayers(filtered);
        } catch (err) {
            console.error(err);
        }
    };

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
                <button onClick={handleSubmit} className={`${s.playerCard__btn} ${s.delBtn}`}>Восстановить</button>
            </div>
        </div>
    );
});

export default PlayerCard;
