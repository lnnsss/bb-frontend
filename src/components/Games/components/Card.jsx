import React from 'react';
import s from "../styles.module.css";
import axios from "axios";
import { apiUsersURL } from "../../../configs/constants.js";
import { useStores } from "../../../stores/root-store-context.js";
import { observer } from "mobx-react-lite";

const Card = observer(({ id, imageUrl, opponent, dateTime, venue }) => {
    const {
        token: { getID },
        modal: { openModal }
    } = useStores()
    const userId = getID();
    const ourLogo = '/logo.png';

    // Форматирование времени
    const formatDate = (dateString) => {
        try {
            const eventDate = new Date(dateString);
            return eventDate.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }) + ' в ' + eventDate.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            console.error("Error formatting date:", e);
            return dateString;
        }
    };

    // Покупка билета
    const handleBuy = async () => {

        const gameData = {
            id,
            opponent,
            dateTime,
            venue,
            imageUrl
        };

        try {
            await axios.put(`${apiUsersURL}/${userId}/addGame`, gameData);
            openModal("Билет забронирован успешно!")
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={s.gameBlock}>
            <div className={s.teamInfo}>
                <div className={s.team}>
                    <img
                        src={ourLogo}
                        alt="АПТ"
                        className={s.teamLogo}
                    />
                    <span className={s.teamName}>АПТ</span>
                </div>

                <span className={s.vs}>VS</span>

                <div className={s.team}>
                    <img
                        src={imageUrl}
                        alt={opponent}
                        className={s.teamLogo}
                    />
                    <span className={s.teamName}>{opponent}</span>
                </div>
            </div>

            <div className={s.matchFooter}>
                <div className={s.matchDetailsLeft}>
                    <p className={s.gameDate}>📅 {formatDate(dateTime)}</p>
                    <p className={s.gameVenue}>📍 {venue}</p>
                </div>
                <div className={s.matchDetailsRight}>
                    <button onClick={handleBuy} className={s.buyTicketButton}>Забронировать</button>
                </div>
            </div>
        </div>
    );
});

export default Card;
