import React from 'react';
import s from "../styles.module.css";
import FormGroup from "./FormGroup.jsx";
import {useStores} from "../../../../../stores/root-store-context.js";
import {observer} from "mobx-react-lite";

const PlayerForm = observer(() => {
    const {
        addPlayer: { name, lastName, number, position, birthday, country, height, weight, imageUrl, setName, setLastName, setNumber, setPosition, setBirthday, setCountry, setHeight, setWeight, setImageUrl, resetForm }
    } = useStores()

    const handleSubmit = () => {
        resetForm()
    }

    return (
        <>
            <FormGroup title="name" text="Имя" value={name} changeValue={setName} />
            <FormGroup title="lastName" text="Фамилия" value={lastName} changeValue={setLastName} />
            <FormGroup type="number" title="number" text="Номер" value={number} changeValue={setNumber} />
            <FormGroup title="position" text="Позиция" value={position} changeValue={setPosition} />
            <FormGroup type="date" title="birthday" text="Дата рождения" value={birthday} changeValue={setBirthday} />
            <FormGroup title="country" text="Страна" value={country} changeValue={setCountry} />
            <FormGroup type="number" title="height" text="Рост" value={height} changeValue={setHeight} />
            <FormGroup type="number" title="weight" text="Вес" value={weight} changeValue={setWeight} />
            <FormGroup type="url" title="imageUrl" text="Фото игрока (url)" value={imageUrl} changeValue={setImageUrl} />
            <button className={s.submitButton} onClick={handleSubmit} >Добавить игрока</button>
        </>
    );
});

export default PlayerForm;