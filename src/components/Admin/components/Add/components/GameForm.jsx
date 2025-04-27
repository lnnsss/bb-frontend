import React from 'react';
import axios from 'axios';
import s from "../styles.module.css";
import FormGroup from "./FormGroup.jsx";
import { useStores } from "../../../../../stores/root-store-context.js";
import { observer } from "mobx-react-lite";
import {apiGamesURL} from "../../../../../configs/constants.js";
import { useNavigate } from 'react-router-dom';

const GameForm = observer(() => {
    const {
        addGame: { opponent, date, time, venue, imageUrl, setOpponent, setDate, setTime, setVenue, setImageUrl, resetForm }
    } = useStores();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        let dateTime = "";
        if (date) {
            if (time) {
                dateTime = `${date}T${time}:00`;
            } else {
                dateTime = `${date}T00:00:00`;
            }
        }

        const gameData = {
            opponent,
            dateTime,
            venue,
            imageUrl
        };

        try {
            await axios.post(apiGamesURL, gameData);
            resetForm();
            navigate("/admin/games")
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <FormGroup title="opponent" text="Соперник" value={opponent} changeValue={setOpponent} />
            <FormGroup type="date" title="date" text="Дата встречи" value={date} changeValue={setDate} />
            <FormGroup type="time" title="time" text="Время встречи" value={time} changeValue={setTime} />
            <FormGroup title="venue" text="Место встречи" value={venue} changeValue={setVenue} />
            <FormGroup type="url" title="imageUrl" text="Эмблема соперника (url)" value={imageUrl} changeValue={setImageUrl} />
            <button type="button" className={s.submitButton} onClick={handleSubmit}>
                Добавить игру
            </button>
        </>
    );
});

export default GameForm;
