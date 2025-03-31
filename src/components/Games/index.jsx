import React from 'react';
import s from "./styles.module.css";
import { useStores } from "../../stores/root-store-context.js";
import { observer } from "mobx-react-lite";
import Card from "./components/Card.jsx";

const Games = observer(() => {
    const {
        games: { games = [] }
    } = useStores();

    return (
        <div className={s.games}>
            <div className={`__container ${s.games__container}`}>
                <h1 className={s.gamesTitle}>Игры</h1>

                <div className={s.gameList}>
                    {games.length > 0 ? (
                        games.map((g) => <Card key={g.id} {...g} />)
                    ) : (
                        <p className={s.noGames}>Календарь игр пуст.</p>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Games;