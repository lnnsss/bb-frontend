import React from 'react';
import axios from 'axios';
import s from "../styles.module.css";
import FormGroup from "./FormGroup.jsx";
import { useStores } from "../../../../../stores/root-store-context.js";
import { observer } from "mobx-react-lite";
import {apiPlayersURL} from "../../../../../configs/constants.js";
import { useNavigate } from 'react-router-dom';

const PlayerForm = observer(() => {
    const {
        addPlayer: { name, lastName, number, position, birthday, country, height, weight, imageUrl, setName, setLastName, setNumber, setPosition, setBirthday, setCountry, setHeight, setWeight, setImageUrl, resetForm }
    } = useStores();
    const navigate = useNavigate();

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
            resetForm();
            navigate("/admin/players")
        } catch (err) {
            console.error(err);
        }
    };

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
            <button type="button" className={s.submitButton} onClick={handleSubmit}>
                Добавить игрока
            </button>
        </>
    );
});

export default PlayerForm;
