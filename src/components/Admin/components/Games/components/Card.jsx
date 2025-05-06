import React from 'react';
import s from "../styles.module.css"

const Card = ({imageUrl, opponent, dateTime, venue }) => {
    const ourLogo = '/logo.png';

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            console.error("Error formatting date:", e);
            return dateString;
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

            <div className={s.matchDetails}>
                <p className={s.gameDate}>
                    📅 {formatDate(dateTime)}
                </p>
                <p className={s.gameVenue}>
                    📍 {venue}
                </p>
            </div>
        </div>
    );
};

export default Card;
