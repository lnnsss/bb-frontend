import React, { useState } from 'react';
import s from "./styles.module.css";
import PlayerForm from "./components/PlayerForm.jsx";
import GameForm from "./components/GameForm.jsx";
import NewsForm from "./components/NewsForm.jsx";
import {observer} from "mobx-react-lite";

const Add = observer(() => {
    const [addType, setAddType] = useState('player');

    const handleToggle = (type) => {
        setAddType(type);
    };

    return (
        <div className={s.add}>
            <div className={`__container ${s.add__container}`}>

                <div className={s.header}>
                    <h1 className={s.title}>Добавить</h1>
                    <div className={s.toggle}>
                        <button
                            className={`${s.toggleButton} ${addType === 'player' ? s.active : ''}`}
                            onClick={() => handleToggle('player')}
                        >
                            Игрока
                        </button>
                        <button
                            className={`${s.toggleButton} ${addType === 'game' ? s.active : ''}`}
                            onClick={() => handleToggle('game')}
                        >
                            Игру
                        </button>
                        <button
                            className={`${s.toggleButton} ${addType === 'news' ? s.active : ''}`}
                            onClick={() => handleToggle('news')}
                        >
                            Новость
                        </button>
                    </div>
                </div>

                <form className={s.form}>
                    {addType === 'player' && <PlayerForm />}
                    {addType === 'game' && <GameForm />}
                    {addType === 'news' && <NewsForm />}
                </form>

            </div>
        </div>
    );
});

export default Add;