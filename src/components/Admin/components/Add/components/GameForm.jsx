import React from 'react';
import axios from 'axios';
import s from "../styles.module.css";
import FormGroup from "./FormGroup.jsx";
import { useStores } from "../../../../../stores/root-store-context.js";
import { observer } from "mobx-react-lite";
import {apiGamesURL} from "../../../../../configs/constants.js";

const GameForm = observer(() => {
    const {
        addGame: { opponent, date, venue, imageUrl, setOpponent, setDate, setVenue, setImageUrl, resetForm }
    } = useStores();

    const handleSubmit = async () => {
        const gameData = {
            opponent,
            date,
            venue,
            imageUrl
        };

        try {
            await axios.post(apiGamesURL, gameData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            resetForm();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <FormGroup title="opponent" text="Соперник" value={opponent} changeValue={setOpponent} />
            <FormGroup type="date" title="date" text="Дата встречи" value={date} changeValue={setDate} />
            <FormGroup title="venue" text="Место встречи" value={venue} changeValue={setVenue} />
            <FormGroup type="url" title="imageUrl" text="Эмблема соперника (url)" value={imageUrl} changeValue={setImageUrl} />
            <button type="button" className={s.submitButton} onClick={handleSubmit}>
                Добавить игру
            </button>
        </>
    );
});

export default GameForm;