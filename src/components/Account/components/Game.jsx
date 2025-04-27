import React from 'react';
import s from "../styles.module.css";

const Game = ({imageUrl, opponent, dateTime, venue}) => {
    return (
        <div className={s.ticketCard}>
            <div className={s.teamsRow}>
                <div className={s.teamBlock}>
                    <img src="/logo.png" alt="АПТ" className={s.teamLogo}/>
                    <span className={s.teamName}>АПТ</span>
                </div>
                <span className={s.vs}>VS</span>
                <div className={s.teamBlock}>
                    <img src={imageUrl} alt={opponent} className={s.teamLogo}/>
                    <span className={s.teamName}>{opponent}</span>
                </div>
            </div>
            <div className={s.ticketInfo}>
                <p className={s.ticketDate}><b>Дата: </b>
                    {new Date(dateTime).toLocaleString('ru-RU', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </p>
                <p className={s.ticketVenue}><b>Поле: </b>{venue}</p>
            </div>
        </div>
    );
};

export default Game;