import React, { useState, useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import s from "./styles.module.css";
import { useStores } from "../../stores/root-store-context.js";
import Card from "./components/Card.jsx";
import axios from "axios";
import { apiPlayersURL } from "../../configs/constants.js";

const Players = observer(() => {
    const {
        players: { players, setPlayers }
    } = useStores();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(apiPlayersURL)

                setPlayers(response.data.content);

            } catch (err) {
                console.error(err)
            }
        }
        fetchPlayers()
    }, [])

    const uniquePositions = useMemo(() => {
        if (!players || players.length === 0) return [];
        return [...new Set(players.map(p => p.position).filter(Boolean))];
    }, [players]);

    const filteredAndSortedPlayers = useMemo(() => {
        let result = players ? [...players] : [];

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                p.lastName.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        if (selectedPosition) {
            result = result.filter(p => p.position === selectedPosition);
        }

        if (sortBy) {
            result.sort((a, b) => {
                switch (sortBy) {
                    case 'age_asc':
                        return new Date(a.birthday) - new Date(b.birthday);
                    case 'age_desc':
                        return new Date(b.birthday) - new Date(a.birthday);
                    case 'lastName_asc':
                        return a.lastName.localeCompare(b.lastName);
                    case 'number_asc':
                        return (a.number || 0) - (b.number || 0);
                    default:
                        return 0;
                }
            });
        }

        return result;
    }, [players, searchTerm, selectedPosition, sortBy]);

    return (
        <section className={s.players}>
            <div className={`__container ${s.players__container}`}>
                <h2 className={s.players__title}>Состав</h2>

                <div className={s.players__controls}>
                    <input
                        type="text"
                        placeholder="Поиск по имени или фамилии..."
                        className={s.players__search}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className={s.players__filter}
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                    >
                        <option value="">Все позиции</option>
                        {uniquePositions.map(pos => (
                            <option key={pos} value={pos}>{pos}</option>
                        ))}
                    </select>
                    <select
                        className={s.players__sort}
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">Сортировка по...</option>
                        <option value="age_asc">Возраст (сначала моложе)</option>
                        <option value="age_desc">Возраст (сначала старше)</option>
                        <option value="lastName_asc">Фамилия (А-Я)</option>
                        <option value="number_asc">Номер (по возрастанию)</option>
                    </select>
                </div>

                <div className={s.players__grid}>
                    {filteredAndSortedPlayers && filteredAndSortedPlayers.length > 0 ? (
                        filteredAndSortedPlayers.map((p) => <Card key={p.id} {...p} />)
                    ) : (
                        players && players.length > 0 ?
                            <p className={s.players__empty}>Игроки не найдены по заданным критериям.</p> :
                            <p className={s.players__empty}>Информация об игроках загружается или отсутствует.</p>
                    )}
                </div>
            </div>
        </section>
    );
});

export default Players;