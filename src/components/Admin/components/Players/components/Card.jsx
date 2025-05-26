import React, { useState } from 'react';
import s from "../styles.module.css";
import axios from 'axios';
import { apiPlayersURL } from "../../../../../configs/constants";
import { useStores } from "../../../../../stores/root-store-context";
import { observer } from 'mobx-react-lite';

const Card = observer(({ id, imageUrl, name, lastName, number, height, weight, position, birthday, country }) => {
    const {
        players: { players, setPlayers, deletedPlayers, setDeletedPlayers }
    } = useStores();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name,
        lastName,
        number,
        height,
        weight,
        position,
        birthday,
        country,
        imageUrl
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`${apiPlayersURL}/${id}`, { id, ...formData });
            const updatedPlayer = response.data.content;
            setPlayers(players.map((p) => (p.id === id ? updatedPlayer : p)));
            setIsEditing(false);
        } catch (err) {
            console.error("Ошибка при сохранении:", err);
        }
    };

    const handleCancel = () => {
        setFormData({ name, lastName, number, height, weight, position, birthday, country, imageUrl });
        setIsEditing(false);
    };

    const handleEdit = () => setIsEditing(true);

    const handleDelete = async () => {
        try {
            await axios.delete(`${apiPlayersURL}/${id}`);
            setPlayers(players.filter(p => p.id !== id));
            setDeletedPlayers([...deletedPlayers, { id, name, lastName }]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={s.playerCard}>
            <div className={s.playerCard__imageWrapper}>
                <img
                    src={formData.imageUrl}
                    alt={`Фото ${formData.name} ${formData.lastName}`}
                    className={s.playerCard__image}
                    loading="lazy"
                />
            </div>
            <div className={s.playerCard__info}>
                <h3 className={s.playerCard__name}>
                    <span className={s.playerCard__number}>
                        {isEditing ? (
                            <input
                                type="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                className={s.input}
                            />
                        ) : (
                            formData.number
                        )}
                    </span>
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={s.input}
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={s.input}
                            />
                        </>
                    ) : (
                        `${formData.name} ${formData.lastName}`
                    )}
                </h3>

                {[
                    { label: "Позиция", name: "position" },
                    { label: "Рост", name: "height", unit: "см" },
                    { label: "Вес", name: "weight", unit: "кг" },
                    { label: "Дата рождения", name: "birthday" },
                    { label: "Страна", name: "country" },
                ].map(({ label, name, unit }) => (
                    <p className={s.playerCard__detail} key={name}>
                        <span className={s.playerCard__label}>{label}:</span>
                        {isEditing ? (
                            <input
                                type={name === "height" || name === "weight" ? "number" : "text"}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className={s.input}
                            />
                        ) : (
                            `${formData[name]} ${unit || ""}`
                        )}
                    </p>
                ))}

                {isEditing ? (
                    <>
                        <button onClick={handleSave} className={`${s.playerCard__btn} ${s.editBtn}`}>
                            Сохранить
                        </button>
                        <button onClick={handleCancel} className={`${s.playerCard__btn} ${s.delBtn}`}>
                            Отмена
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={handleEdit} className={`${s.playerCard__btn} ${s.editBtn}`}>
                            Редактировать
                        </button>
                        <button onClick={handleDelete} className={`${s.playerCard__btn} ${s.delBtn}`}>
                            Удалить
                        </button>
                    </>
                )}
            </div>
        </div>
    );
});

export default Card;