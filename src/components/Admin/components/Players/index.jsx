import React from 'react';
import s from "./styles.module.css"
import {useStores} from "../../../../stores/root-store-context.js";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";

const Players = () => {
    const {
        players: { players }
    } = useStores();

    return (
        <section className={s.players}>
            <div className={`__container ${s.players__container}`}>
                <Header />

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
};

export default Players;