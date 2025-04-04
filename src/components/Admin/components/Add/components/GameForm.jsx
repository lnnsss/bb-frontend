import React from 'react';
import s from "../styles.module.css";
import FormGroup from "./FormGroup.jsx";
import {useStores} from "../../../../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";

const GameForm = observer(() => {
    const {
        addGame: { opponent, date, venue, imageUrl, setOpponent, setDate, setVenue, setImageUrl, resetForm }
    } = useStores()

    const handleSubmit = () => {
        resetForm()
    }

    return (
        <>
            <FormGroup title="opponent" text="Соперник" value={opponent} changeValue={setOpponent} />
            <FormGroup type="date" title="date" text="Дата встречи" value={date} changeValue={setDate} />
            <FormGroup title="venue" text="Место встречи" value={venue} changeValue={setVenue} />
            <FormGroup type="url" title="imageUrl" text="Эмблема соперника (url)" value={imageUrl} changeValue={setImageUrl} />
            <button className={s.submitButton} onClick={handleSubmit} >Добавить игру</button>
        </>
    );
});

export default GameForm;