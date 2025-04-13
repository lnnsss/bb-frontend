import React, {useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import s from "./styles.module.css";
import { useStores } from "../../stores/root-store-context.js";
import Card from "./components/Card.jsx";
import axios from "axios";
import {apiPlayersURL} from "../../configs/constants.js";


const Players = observer(() => {
    const {
        players: { players, setPlayers }
    } = useStores();

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

    return (
        <section className={s.players}>
            <div className={`__container ${s.players__container}`}>
                <h2 className={s.players__title}>Состав</h2>

                <div className={s.players__grid}>
                    {players && players.length > 0 ? (
                        players.map((p) => <Card key={p.id} {...p} />)
                    ) : (
                        <p className={s.players__empty}>Информация об игроках загружается или отсутствует.</p>
                    )}
                </div>
            </div>
        </section>
    );
});

export default Players;