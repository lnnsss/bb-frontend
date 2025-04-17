import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import s from "./styles.module.css";
import { useStores } from "../../stores/root-store-context.js";
import axios from "axios";
import {apiPlayersURL} from "../../configs/constants.js";

const Player = observer(() => {
    const navigate = useNavigate();
    const [player, setPlayer] = useState();

    // id игрока
    const params = useParams();
    const playerId = params.idd;

    // запрос
    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                const response = await axios.get(`${apiPlayersURL}/${playerId}`)

                setPlayer(response.data.content);

            } catch (err) {
                console.error(err)
            }
        }
        fetchPlayer()
    }, [])

    return (
        <section className={s.player}>
            <div className={`__container ${s.player__container}`}>
                <Link to="/players" className={s.backButton}>← Назад к составу</Link>

                <article className={s.playerDetailCard}>
                    <div className={s.playerDetailCard__imageWrapper}>
                        <img
                            src={player.imageUrl}
                            alt={`Фото ${player.name} ${player.lastName}`}
                            className={s.playerDetailCard__image}
                        />
                    </div>
                    <div className={s.playerDetailCard__info}>
                        <h1 className={s.playerDetailCard__name}>
                            <span className={s.playerDetailCard__number}>{player.number}</span>
                            {`${player.name} ${player.lastName}`}
                        </h1>
                        <div className={s.playerDetailCard__stats}>
                            <div className={s.playerDetailCard__statItem}>
                                <span className={s.playerDetailCard__label}>Позиция:</span>
                                <span className={s.playerDetailCard__value}>{player.position}</span>
                            </div>
                            <div className={s.playerDetailCard__statItem}>
                                <span className={s.playerDetailCard__label}>Рост:</span>
                                <span className={s.playerDetailCard__value}>{player.hight} см</span>
                            </div>
                            <div className={s.playerDetailCard__statItem}>
                                <span className={s.playerDetailCard__label}>Вес:</span>
                                <span className={s.playerDetailCard__value}>{player.weight} кг</span>
                            </div>
                            <div className={s.playerDetailCard__statItem}>
                                <span className={s.playerDetailCard__label}>Дата рождения:</span>
                                <span className={s.playerDetailCard__value}>{player.birthday}</span>
                            </div>
                            <div className={s.playerDetailCard__statItem}>
                                <span className={s.playerDetailCard__label}>Страна:</span>
                                <span className={s.playerDetailCard__value}>{player.country}</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
});

export default Player;